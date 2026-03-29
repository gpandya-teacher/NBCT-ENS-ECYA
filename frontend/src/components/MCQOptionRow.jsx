export default function MCQOptionRow({
  label,
  text,
  onSelect,
  disabled,
  variant = "neutral",
}) {
  const variants = {
    neutral: "border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    selected: "border-slate-700 bg-slate-100 text-slate-900",
    correct: "border-emerald-600 bg-emerald-50 text-emerald-900",
    incorrect: "border-rose-600 bg-rose-50 text-rose-900",
  };

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={`flex w-full items-start gap-3 border px-4 py-3 text-left disabled:cursor-not-allowed ${variants[variant]}`}
    >
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-current text-[13px] font-bold">
        {label}
      </span>
      <span className="leading-6">{text}</span>
    </button>
  );
}
