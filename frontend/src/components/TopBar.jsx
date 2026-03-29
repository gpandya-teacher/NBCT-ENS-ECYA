export default function TopBar({
  title,
  sectionTitle,
  centerContent,
  rightContent,
}) {
  return (
    <div className="mx-auto flex h-[56px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-5">
      <div className="min-w-0">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
          {title}
        </p>
        <p className="truncate text-[15px] font-semibold text-slate-900">
          {sectionTitle}
        </p>
      </div>

      <div className="hidden flex-1 items-center justify-center lg:flex">
        {centerContent}
      </div>

      <div className="flex items-center gap-2">{rightContent}</div>
    </div>
  );
}
