export default function BottomControlBar({ leftContent, rightContent }) {
  return (
    <div className="mx-auto flex min-h-[56px] max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-5">
      <div className="flex items-center gap-2">{leftContent}</div>
      <div className="flex items-center gap-2">{rightContent}</div>
    </div>
  );
}
