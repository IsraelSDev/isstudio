import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextPath = path.join(root, ".next");
const cacheDir = path.join(
  process.env.LOCALAPPDATA || process.env.TEMP || root,
  "isstudio-site-next",
);

function isLink(p) {
  try {
    return fs.lstatSync(p).isSymbolicLink();
  } catch {
    return false;
  }
}

if (fs.existsSync(nextPath)) {
  if (isLink(nextPath)) fs.unlinkSync(nextPath);
  else fs.rmSync(nextPath, { recursive: true, force: true });
}

if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true });
}

console.log("[cache] .next removido.");
