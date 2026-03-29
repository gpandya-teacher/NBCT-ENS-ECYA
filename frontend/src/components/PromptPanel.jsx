export default function PromptPanel({
  domain,
  promptId,
  promptText,
  isLoading,
  errorMessage,
}) {
  let content = promptText;

  if (isLoading) {
    content = "Loading prompt...";
  } else if (errorMessage) {
    content = "Failed to load prompt";
  }

  return (
    <div className="border border-slate-300 bg-white">
      <div className="border-b border-slate-300 px-4 py-3">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
          Prompt Display
        </p>
      </div>

      <div className="space-y-5 px-4 py-4">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Domain
          </p>
          <p className="mt-1 text-[14px] text-slate-700">{domain}</p>
        </div>

        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Instructions
          </p>
          <p className="mt-2 text-[14px] leading-6 text-slate-700">
            Read the prompt carefully. Write a focused response using evidence,
            instructional reasoning, and expected student outcomes.
          </p>
        </div>

        <div className="border border-slate-300 bg-slate-50 px-4 py-4">
          {promptId ? (
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Prompt {promptId}
            </p>
          ) : null}
          <p className="text-[19px] font-bold leading-8 text-slate-900">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
