function ReviewCard({ item, index }) {
  return (
    <article
      className={`border bg-white ${
        item.isCorrect
          ? "border-emerald-300"
          : "border-rose-200 bg-rose-50/80"
      }`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-slate-300 px-4 py-3">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Question {index + 1}
          </p>
          <h3 className="mt-2 text-[18px] font-bold text-slate-900">{item.question}</h3>
        </div>
        <span
          className={`border px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] ${
            item.isCorrect
              ? "border-emerald-300 bg-emerald-50 text-emerald-900"
              : "border-rose-300 bg-rose-50 text-rose-900"
          }`}
        >
          {item.isCorrect ? "Correct" : "Review"}
        </span>
      </div>

      <div className="space-y-3 px-4 py-4">
        {item.choices.map((choice, index) => {
          const isSelected = item.selectedChoiceId === choice.id;
          const isCorrect = item.correctChoiceId === choice.id;
          const displayLabel = String.fromCharCode(65 + index);

          return (
            <div
              key={choice.id}
              className={`border px-4 py-3 ${
                isCorrect
                  ? "border-emerald-500 bg-emerald-100"
                  : isSelected
                    ? "border-rose-400 bg-rose-100"
                    : "border-slate-200 bg-white"
              }`}
            >
              <span className="mr-3 inline-flex h-7 w-7 items-center justify-center border border-current text-[12px] font-bold">
                {displayLabel}
              </span>
              <span className="leading-7 text-slate-800">{choice.text}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default function ReviewList({ review }) {
  return (
    <section className="space-y-5">
      {review.map((item, index) => (
        <ReviewCard key={item.questionId} item={item} index={index} />
      ))}
    </section>
  );
}
