import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, "../data");

function ensureFile(filePath, fallbackValue) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(fallbackValue, null, 2));
  }
}

export function readJsonFile(fileName, fallbackValue) {
  const filePath = path.join(DATA_DIR, fileName);
  ensureFile(filePath, fallbackValue);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function writeJsonFile(fileName, value) {
  const filePath = path.join(DATA_DIR, fileName);
  ensureFile(filePath, value);
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}
