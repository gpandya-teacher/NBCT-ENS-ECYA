// Placeholder for real payment processor integration.
// Connect Stripe, Postmark billing links, or another provider here later.
// For now the upgrade flow records intent and waits for admin approval.

export function getUpgradePlanConfig() {
  return {
    plan_id: "daily_unlimited",
    price_label: "$1/day",
    payment_processor: "manual_placeholder",
  };
}
