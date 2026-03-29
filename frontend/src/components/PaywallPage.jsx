export default function PaywallPage({
  user,
  message,
  onBack,
  onLogin,
  onSignup,
  onUpgrade,
  onAccount,
}) {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-4 py-8">
      <div className="mx-auto max-w-2xl border border-slate-300 bg-white">
        <div className="border-b border-slate-300 px-5 py-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Access Limit
          </p>
          <h1 className="mt-1 text-[22px] font-bold text-slate-900">
            You have used your free session for today.
          </h1>
        </div>

        <div className="space-y-4 px-5 py-5 text-[14px] text-slate-700">
          <p>{message || "Create an account to continue."}</p>
          <p>Upgrade to unlimited access for $1/day.</p>

          <div className="flex flex-wrap gap-2">
            {!user ? (
              <>
                <button
                  type="button"
                  onClick={onSignup}
                  className="border border-slate-900 bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={onLogin}
                  className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onUpgrade}
                  className="border border-slate-900 bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white"
                >
                  Upgrade to Unlimited Access
                </button>
                <button
                  type="button"
                  onClick={onAccount}
                  className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
                >
                  View Account
                </button>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-slate-300 px-5 py-4">
          <button
            type="button"
            onClick={onBack}
            className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
          >
            Back Home
          </button>
        </div>
      </div>
    </main>
  );
}
