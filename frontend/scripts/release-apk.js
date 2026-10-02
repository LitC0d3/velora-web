#!/usr/bin/env node
/**
 * Registra un APK para la landing (modo estático / GitHub Pages).
 *
 * Uso:
 *   node scripts/release-apk.js <ruta/al/velora.apk> [--version 0.11.0] [--url https://.../velora.apk]
 *
 * - Sin --url: copia el APK a public/apk/velora.apk (límite de GitHub: 100 MB por archivo).
 * - Con --url: no copia nada; el botón de descarga apuntará a esa URL (ideal para GitHub Releases).
 * En ambos casos calcula tamaño + SHA-256 y escribe public/apk/release.json.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const args = process.argv.slice(2);
const apkPath = args.find((a) => !a.startsWith("--"));
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : undefined;
};

if (!apkPath || !fs.existsSync(apkPath)) {
  console.error("Uso: node scripts/release-apk.js <ruta/al/velora.apk> [--version X.Y.Z] [--url https://...]");
  process.exit(1);
}

const outDir = path.join(__dirname, "..", "public", "apk");
fs.mkdirSync(outDir, { recursive: true });

const bytes = fs.readFileSync(apkPath);
const sha256 = crypto.createHash("sha256").update(bytes).digest("hex");
const sizeMb = bytes.length / (1024 * 1024);
const url = flag("url");

if (!url) {
  if (sizeMb > 100) {
    console.error(`El APK pesa ${sizeMb.toFixed(1)} MB (> 100 MB). GitHub no lo acepta en el repo.`);
    console.error("Súbelo a GitHub Releases y vuelve a ejecutar con --url <enlace del asset>.");
    process.exit(1);
  }
  fs.copyFileSync(apkPath, path.join(outDir, "velora.apk"));
}

const manifest = {
  available: true,
  version: flag("version") || "0.11.0",
  size_bytes: bytes.length,
  sha256,
  url: url || "apk/velora.apk",
};

fs.writeFileSync(path.join(outDir, "release.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log("release.json actualizado:");
console.log(JSON.stringify(manifest, null, 2));
