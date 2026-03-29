function getButtonClasses({ isCurrent, isAnswered, isFlagged }) {
  if (isCurrent) {
    return "border-slate-900 bg-slate-900 text-white";
  }

  if (isFlagged) {
    return "border-amber-400 bg-amber-50 text-amber-800";
  }

  if (isAnswered) {
    return "border-slate-400 bg-slate-100 text-slate-900";
  }

  return "border-slate-300 bg-white text-slate-700 hover:border-slate-400";
}

export default function QuestionNavigator({
  totalQuestions,
  currentIndex,
  answers,
  flaggedQuestions,
  onSelectQuestion,
}) {
  return (
    <div className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-4 py-3">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
          Question Navigator
        </p>
      </div>

      <div className="px-4 py-4">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const questionId = answers.questionIds?.[index];
            const isAnswered = questionId ? Boolean(answers.byId[questionId]) : false;
            const isFlagged = questionId ? Boolean(flaggedQuestions[questionId]) : false;

            return (
              <button
                key={index + 1}
                type="button"
                onClick={() => onSelectQuestion(index)}
                className={`h-9 w-9 border text-[13px] font-semibold ${getButtonClasses({
                  isCurrent: index === currentIndex,
                  isAnswered,
                  isFlagged,
                })}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-5 space-y-2 text-[12px] text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 border border-slate-900 bg-slate-900" />
            Current
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 border border-slate-400 bg-slate-100" />
            Answered
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 border border-amber-400 bg-amber-50" />
            Flagged
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 border border-slate-300 bg-white" />
            Unanswered
          </div>
        </div>
      </div>
    </div>
  );
}
