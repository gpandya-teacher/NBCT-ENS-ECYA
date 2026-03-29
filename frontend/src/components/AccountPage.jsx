export default function AccountPage({
  user,
  usageSnapshot,
  onBack,
  onUpgrade,
  onLogout,
  noticeMessage,
}) {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-4 py-8">
      <div className="mx-auto max-w-3xl border border-slate-300 bg-white">
        <div className="border-b border-slate-300 px-5 py-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Account
          </p>
          <h1 className="mt-1 text-[22px] font-bold text-slate-900">
            {user?.full_name}
          </h1>
        </div>

        <div className="grid gap-4 px-5 py-5 md:grid-cols-2">
          <div className="space-y-2 border border-slate-300 p-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">Profile</p>
            <p className="text-[14px] text-slate-700">Email: {user?.email}</p>
            <p className="text-[14px] text-slate-700">Role: {user?.role}</p>
            <p className="text-[14px] text-slate-700">
              Email verified: {user?.email_verified ? "Yes" : "No"}
            </p>
            <p className="text-[14px] text-slate-700">
              Account status: {user?.account_status}
            </p>
          </div>

          <div className="space-y-2 border border-slate-300 p-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">Plan</p>
            <p className="text-[14px] text-slate-700">Upgrade status: {user?.upgrade_status}</p>
            <p className="text-[14px] text-slate-700">
              Unlimited access: {usageSnapshot?.has_unlimited_access ? "Yes" : "No"}
            </p>
          </div>

          <div className="space-y-2 border border-slate-300 p-4 md:col-span-2">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">Usage Status</p>
            <p className="text-[14px] text-slate-700">
              Free sessions used today: {usageSnapshot?.usage?.free_usage_count_today ?? 0}/
              {usageSnapshot?.usage?.daily_limit ?? 1}
            </p>
            <p className="text-[14px] text-slate-700">
              Unlimited access: {usageSnapshot?.has_unlimited_access ? "Yes" : "No"}
            </p>
            <p className="text-[14px] text-slate-700">
              Daily reset timezone: {usageSnapshot?.timezone}
            </p>
          </div>
          {noticeMessage ? (
            <div className="border border-emerald-300 bg-emerald-50 p-4 md:col-span-2">
              <p className="text-[14px] text-emerald-800">{noticeMessage}</p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-300 px-5 py-4">
          <button
            type="button"
            onClick={onBack}
            className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
          >
            Back
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onUpgrade}
              className="border border-slate-900 bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white"
            >
              Upgrade to $1/day
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
