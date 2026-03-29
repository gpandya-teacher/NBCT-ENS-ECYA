import crypto from "node:crypto";
import { readJsonFile, writeJsonFile } from "./storage-service.js";

const VERIFICATIONS_FILE = "email-verifications.json";

function getVerifications() {
  return readJsonFile(VERIFICATIONS_FILE, []);
}

function saveVerifications(items) {
  writeJsonFile(VERIFICATIONS_FILE, items);
}

export function createVerificationToken(userId) {
  const token = crypto.randomBytes(24).toString("hex");
  const current = getVerifications();
  current.push({
    id: crypto.randomUUID(),
    user_id: userId,
    token,
    created_at: new Date().toISOString(),
    used_at: null,
  });
  saveVerifications(current);
  return token;
}

export function consumeVerificationToken(token) {
  const current = getVerifications();
  const index = current.findIndex((item) => item.token === token && !item.used_at);

  if (index === -1) {
    return null;
  }

  current[index] = {
    ...current[index],
    used_at: new Date().toISOString(),
  };
  saveVerifications(current);
  return current[index];
}
