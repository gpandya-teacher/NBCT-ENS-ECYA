export default function WritingPanel({
  responseText,
  onChange,
}) {
  return (
    <div className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-4 py-3">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
          Response Area
        </p>
      </div>

      <div className="px-4 py-4">
        <textarea
          value={responseText}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Write your response here."
          className="min-h-[62vh] w-full resize-none border border-slate-300 bg-white px-4 py-3 text-[15px] leading-7 text-slate-900 outline-none focus:border-slate-500"
        />
      </div>
    </div>
  );
}
