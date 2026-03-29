import crypto from "node:crypto";
import { readJsonFile, writeJsonFile } from "./storage-service.js";
import { updateUpgradeStatus } from "./auth-service.js";

const UPGRADES_FILE = "upgrade-requests.json";

function getUpgradeRequests() {
  return readJsonFile(UPGRADES_FILE, []);
}

function saveUpgradeRequests(items) {
  writeJsonFile(UPGRADES_FILE, items);
}

export function listUpgradeRequests() {
  return getUpgradeRequests().sort((left, right) =>
    right.requested_at.localeCompare(left.requested_at),
  );
}

export function createUpgradeRequest(user) {
  const now = new Date().toISOString();
  const requests = getUpgradeRequests();
  const request = {
    id: crypto.randomUUID(),
    user_id: user.id,
    user_name: user.full_name,
    user_email: user.email,
    requested_at: now,
    status: "pending",
    approved_at: null,
    approved_by: null,
    notes: "",
  };

  requests.unshift(request);
  saveUpgradeRequests(requests);
  updateUpgradeStatus({
    targetUserId: user.id,
    status: "pending",
  });

  return request;
}

export function updateUpgradeRequest({
  requestId,
  status,
  actedBy,
  notes = "",
}) {
  const requests = getUpgradeRequests();
  const index = requests.findIndex((item) => item.id === requestId);

  if (index === -1) {
    return null;
  }

  const now = new Date().toISOString();
  const nextRequest = {
    ...requests[index],
    status,
    approved_at: status === "approved" ? now : null,
    approved_by: status === "approved" ? actedBy : null,
    notes,
  };
  requests[index] = nextRequest;
  saveUpgradeRequests(requests);

  updateUpgradeStatus({
    targetUserId: nextRequest.user_id,
    status,
    actedBy,
  });

  return nextRequest;
}
