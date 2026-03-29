import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.resolve(
  __dirname,
  "../data/nbct_question_bank_405_v2_cleaned.json",
);

const QUESTION_COUNT_DEFAULT = 20;
const SECONDS_PER_QUESTION = 45;
const activeQuizzes = new Map();
const ANSWER_PREFIX_PATTERN = /^[A-D](?:[\.\)]|\s+)\s*/i;

function shuffle(items) {
  const clone = [...items];

  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }

  return clone;
}

function normalizeQuestion(item) {
  const cleanChoiceText = (value) =>
    String(value ?? "")
      .trim()
      .replace(ANSWER_PREFIX_PATTERN, "")
      .replace(/([a-z0-9\)])([A-Z])/g, "$1 $2")
      .replace(/\s+/g, " ")
      .trim();

  const optionMap = {
    A: cleanChoiceText(item.option_a),
    B: cleanChoiceText(item.option_b),
    C: cleanChoiceText(item.option_c),
    D: cleanChoiceText(item.option_d),
  };

  const correctAnswer = item.correct_answer?.trim().toUpperCase();
  const choiceIds = ["A", "B", "C", "D"];
  const allChoicesPresent = choiceIds.every((id) => optionMap[id]);

  if (!allChoicesPresent || !choiceIds.includes(correctAnswer)) {
    return null;
  }

  return {
    id: item.id,
    question: item.question?.trim(),
    topicTag: item.topic_tag ?? "general",
    difficultyTag: item.difficulty_tag ?? "unknown",
    sourceReference: item.source_reference ?? "",
    choices: choiceIds.map((id) => ({
      id,
      text: optionMap[id],
    })),
    correctChoiceId: correctAnswer,
  };
}

function loadQuestions() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  const parsed = JSON.parse(raw);

  return parsed
    .filter((item) => item.item_type === "mcq")
    .map(normalizeQuestion)
    .filter(Boolean);
}

const questionBank = loadQuestions();

export function createQuizSession(limit = QUESTION_COUNT_DEFAULT) {
  const safeLimit = Math.max(
    1,
    Math.min(Number(limit) || QUESTION_COUNT_DEFAULT, questionBank.length),
  );
  const quizId = crypto.randomUUID();
  const selectedQuestions = shuffle(questionBank)
    .slice(0, safeLimit)
    .map((question) => ({
      ...question,
      choices: shuffle(question.choices),
    }));

  const durationSeconds = safeLimit * SECONDS_PER_QUESTION;

  activeQuizzes.set(quizId, {
    createdAt: Date.now(),
    questions: selectedQuestions,
  });

  return {
    quizId,
    durationSeconds,
    totalQuestions: selectedQuestions.length,
    questions: selectedQuestions.map((question) => ({
      id: question.id,
      question: question.question,
      topicTag: question.topicTag,
      difficultyTag: question.difficultyTag,
      choices: question.choices,
      correctChoiceId: question.correctChoiceId,
    })),
  };
}

export function gradeQuizSession(quizId, answers = []) {
  const session = activeQuizzes.get(quizId);

  if (!session) {
    return null;
  }

  const answersByQuestionId = new Map(
    answers.map((answer) => [answer.questionId, answer.selectedChoiceId]),
  );

  let score = 0;

  const review = session.questions.map((question) => {
    const selectedChoiceId = answersByQuestionId.get(question.id) ?? null;
    const isCorrect = selectedChoiceId === question.correctChoiceId;

    if (isCorrect) {
      score += 1;
    }

    return {
      questionId: question.id,
      question: question.question,
      topicTag: question.topicTag,
      difficultyTag: question.difficultyTag,
      choices: question.choices,
      selectedChoiceId,
      correctChoiceId: question.correctChoiceId,
      correctAnswerText:
        question.choices.find((choice) => choice.id === question.correctChoiceId)
          ?.text ?? "",
      isCorrect,
    };
  });

  activeQuizzes.delete(quizId);

  return {
    quizId,
    score,
    totalQuestions: session.questions.length,
    percentage: Math.round((score / session.questions.length) * 100),
    review,
  };
}

export function getQuestionBankStats() {
  return {
    totalQuestions: questionBank.length,
    defaultQuestionCount: QUESTION_COUNT_DEFAULT,
    secondsPerQuestion: SECONDS_PER_QUESTION,
  };
}
