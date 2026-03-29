# NBCT Quiz App

Full-stack quiz app built with React, Node.js, and Tailwind using the NBCT multiple-choice and written-response datasets.

## Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Data sources:
  - `backend/data/nbct_question_bank_405_v2_cleaned.json`
  - `backend/data/nbct_component1_dataset.jsonl`

## Features

- Home screen with `Study Mode`, `Exam Mode`, and `Written Prompt Practice`
- One-question-at-a-time MCQ flow with four answer choices
- Randomized questions for each MCQ session
- Timer countdown, score tracking, and review pages
- Exam-style written prompt workspace with prompt panel, response area, timer, word count, and autosave
- Written feedback screen with the prompt, user response, ideal answer, rubric breakdown, keyword matches, and a simple score estimate
- Server-side scoring based on the dataset's `correct_answer` field for MCQs and `scoring_rules` plus keyword presence for written prompts

## Getting started

1. Install Node.js 20+.
2. From the project root, run:

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and the API runs on `http://localhost:3001`.

## Notes

- The backend filters the source file to valid multiple-choice records with populated `option_a` through `option_d` values and a non-empty `correct_answer`.
- Study Mode currently starts 20 MCQs by default and Exam Mode starts 30. You can change that in `frontend/src/App.jsx`.
- Written Prompt Practice uses a 30-minute timer by default and selects one random prompt per session from the JSONL dataset.
