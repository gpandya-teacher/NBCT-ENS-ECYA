export default function AdminPage({
  users,
  notifications,
  upgradeRequests,
  emailProviderStatus,
  onBack,
  onRefresh,
  onUpdateUserStatus,
  onUpdateUpgradeRequest,
}) {
  const pendingUpgradeRequests = upgradeRequests.filter(
    (request) => request.status === "pending",
  );

  return (
    <main className="min-h-screen bg-[#f3f4f6] px-4 py-8">
      <div className="mx-auto max-w-7xl border border-slate-300 bg-white">
        <div className="border-b border-slate-300 px-5 py-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Admin
          </p>
          <h1 className="mt-1 text-[22px] font-bold text-slate-900">
            Email And Upgrade Dashboard
          </h1>
        </div>

        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <div className="text-[14px] text-slate-700">
            <p>Manage users, review upgrade requests, and inspect email delivery.</p>
            <p className="mt-1 text-[13px] text-slate-500">
              Provider: {emailProviderStatus?.provider ?? "smtp"} | SMTP configured:{" "}
              {emailProviderStatus?.smtp_configured ? "yes" : "no"}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onBack}
              className="border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onRefresh}
              className="border border-slate-900 bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="grid gap-4 px-5 py-5 xl:grid-cols-[1.2fr_1fr]">
          <div className="border border-slate-300">
            <div className="border-b border-slate-200 px-4 py-3">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Pending Upgrade Requests
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-[14px]">
                <thead className="bg-slate-50 text-[12px] uppercase tracking-[0.16em] text-slate-500">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3">Name</th>
                    <th className="border-b border-slate-200 px-4 py-3">Email</th>
                    <th className="border-b border-slate-200 px-4 py-3">Requested</th>
                    <th className="border-b border-slate-200 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingUpgradeRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="border-b border-slate-200 px-4 py-3">{request.user_name}</td>
                      <td className="border-b border-slate-200 px-4 py-3">{request.user_email}</td>
                      <td className="border-b border-slate-200 px-4 py-3">
                        {new Date(request.requested_at).toLocaleString()}
                      </td>
                      <td className="border-b border-slate-200 px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => onUpdateUpgradeRequest(request.id, "approved")}
                            className="border border-slate-300 px-3 py-1 text-[12px] font-semibold text-slate-700"
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            onClick={() => onUpdateUpgradeRequest(request.id, "rejected")}
                            className="border border-slate-300 px-3 py-1 text-[12px] font-semibold text-slate-700"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {pendingUpgradeRequests.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-4 text-slate-500">
                        No pending upgrade requests right now.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-slate-300">
            <div className="border-b border-slate-200 px-4 py-3">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Email Notifications
              </p>
            </div>
            <div className="max-h-[420px] space-y-3 overflow-y-auto px-4 py-4">
              {notifications.length === 0 ? (
                <p className="text-[14px] text-slate-500">No admin notifications yet.</p>
              ) : (
                notifications.map((item) => (
                  <div key={item.id} className="border border-slate-200 px-3 py-3">
                    <p className="text-[13px] font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 whitespace-pre-wrap text-[13px] leading-6 text-slate-700">
                      {item.body}
                    </p>
                    <p className="mt-2 text-[12px] text-slate-500">
                      {new Date(item.created_at).toLocaleString()}
                    </p>
                    <p className="mt-1 text-[12px] text-slate-500">
                      Delivery: {item.email_result?.delivered ? "sent" : item.email_result?.reason ?? "not attempted"}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border-t border-slate-200">
          <table className="min-w-full text-left text-[14px]">
            <thead className="bg-slate-50 text-[12px] uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="border-b border-slate-200 px-4 py-3">Name</th>
                <th className="border-b border-slate-200 px-4 py-3">Email</th>
                <th className="border-b border-slate-200 px-4 py-3">Role</th>
                <th className="border-b border-slate-200 px-4 py-3">Verified</th>
                <th className="border-b border-slate-200 px-4 py-3">Account</th>
                <th className="border-b border-slate-200 px-4 py-3">Free Use</th>
                <th className="border-b border-slate-200 px-4 py-3">Upgrade</th>
                <th className="border-b border-slate-200 px-4 py-3">Created</th>
                <th className="border-b border-slate-200 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-slate-200 px-4 py-3">{user.full_name}</td>
                  <td className="border-b border-slate-200 px-4 py-3">{user.email}</td>
                  <td className="border-b border-slate-200 px-4 py-3">{user.role}</td>
                  <td className="border-b border-slate-200 px-4 py-3">
                    {user.email_verified ? "Yes" : "No"}
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3">{user.account_status}</td>
                  <td className="border-b border-slate-200 px-4 py-3">
                    {user.free_usage_count_today ?? 0} / {user.last_free_usage_date ?? "never"}
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3">{user.upgrade_status}</td>
                  <td className="border-b border-slate-200 px-4 py-3">
                    {new Date(user.created_at).toLocaleString()}
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => onUpdateUserStatus(user.id, "active")}
                        className="border border-slate-300 px-3 py-1 text-[12px] font-semibold text-slate-700"
                      >
                        Activate
                      </button>
                      <button
                        type="button"
                        onClick={() => onUpdateUserStatus(user.id, "suspended")}
                        className="border border-slate-300 px-3 py-1 text-[12px] font-semibold text-slate-700"
                      >
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
