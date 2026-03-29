export default function ApprovalStatusPage({
  user,
  verificationState,
  onBack,
  onLogin,
  onResendVerification,
  onLogout,
}) {
  const isVerified = Boolean(user?.email_verified);
  const isSuspended = user?.account_status === "suspended";

  let title = "Verify your email to activate your account.";
  let detail =
    "Check your inbox for the verification link. You can resend it if needed.";

  if (verificationState?.status === "success") {
    title = "Your email has been verified.";
    detail = "Your account is active for login. You can sign in now.";
  } else if (verificationState?.status === "error" && verificationState?.message) {
    detail = verificationState.message;
  } else if (verificationState?.status === "sent" && verificationState?.message) {
    detail = verificationState.message;
  }

  if (isSuspended) {
    title = "Your account is suspended.";
    detail = "Contact the administrator for assistance.";
  } else if (isVerified) {
    title = "Your email is verified.";
    detail =
      verificationState?.message ||
      "Your account is active. Log in to continue or request an upgrade after your free session is used.";
  }

  return (
    <main className="min-h-screen bg-[#f3f4f6] px-4 py-8">
      <div className="mx-auto max-w-2xl border border-slate-300 bg-white">
        <div className="border-b border-slate-300 px-5 py-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Account Status
          </p>
          <h1 className="mt-1 text-[22px] font-bold text-slate-900">
            {title}
          </h1>
        </div>

        <div className="space-y-3 px-5 py-5 text-[14px] text-slate-700">
          <p>{detail}</p>
          {user ? <p>Name: {user.full_name}</p> : null}
          {user ? <p>Email: {user.email}</p> : null}
          {user ? (
            <p>Email verified: {user.email_verified ? "Yes" : "No"}</p>
          ) : null}
          {user ? <p>Account status: {user.account_status ?? "active"}</p> : null}
          {user ? <p>Upgrade status: {user.upgrade_status ?? "none"}</p> : null}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-slate-300 px-5 py-4">
          <button
            type="button"
            onClick={onBack}
            className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
          >
            Back Home
          </button>
          {!isVerified && !isSuspended ? (
            <button
              type="button"
              onClick={onResendVerification}
              className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
            >
              Resend Verification Email
            </button>
          ) : null}
          {isVerified && !isSuspended ? (
            <button
              type="button"
              onClick={onLogin}
              className="border border-slate-900 bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white"
            >
              Log In
            </button>
          ) : null}
          {user ? (
            <button
              type="button"
              onClick={onLogout}
              className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
            >
              Log Out
            </button>
          ) : null}
        </div>
      </div>
    </main>
  );
}
