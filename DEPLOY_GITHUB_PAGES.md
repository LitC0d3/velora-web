# Publicar Velora en GitHub Pages (gratis)

La landing ya no depende de ningún backend: es un sitio 100 % estático.
El botón de descarga lee `frontend/public/apk/release.json` y descarga el APK desde ahí
(o desde una URL externa, p. ej. GitHub Releases).

## 1. Sube el proyecto a GitHub
Usa el botón **"Save to GitHub"** del chat de Emergent (o `git push` desde tu PC).
El repositorio debe contener la carpeta `frontend/` y `.github/workflows/deploy-pages.yml`.

## 2. Activa GitHub Pages
1. En tu repositorio: **Settings → Pages**.
2. En **Build and deployment → Source** elige **GitHub Actions**.
3. Listo. Cada `push` a `main` ejecuta el workflow y publica el sitio en
   `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`.

   (La primera vez puedes lanzarlo a mano desde la pestaña **Actions → Deploy Velora landing → Run workflow**.)

## 3. Sube tu APK
Tienes dos opciones:

### Opción A — APK dentro del repo (si pesa menos de 100 MB)
```bash
cd frontend
node scripts/release-apk.js /ruta/a/velora.apk --version 2.4.0
git add public/apk && git commit -m "APK v2.4.0" && git push
```
El script copia el APK a `public/apk/velora.apk` y genera `release.json`
(versión, tamaño y SHA-256 que se muestran en el modal de descarga).

### Opción B — APK en GitHub Releases (recomendada, sin límite de 100 MB)
1. En GitHub: **Releases → Draft a new release**, sube `velora.apk` y publica.
2. Copia el enlace del archivo (termina en `/releases/download/vX.Y.Z/velora.apk`).
3. Ejecuta:
```bash
cd frontend
node scripts/release-apk.js /ruta/a/velora.apk --version 2.4.0 --url https://github.com/USUARIO/REPO/releases/download/v2.4.0/velora.apk
git add public/apk/release.json && git commit -m "Release v2.4.0" && git push
```

Mientras `release.json` tenga `"available": false`, el modal muestra "El APK se está preparando".

## 4. Dominio propio (opcional)
En **Settings → Pages → Custom domain** escribe tu dominio y crea el registro DNS que GitHub indica.
Como los assets usan rutas relativas (`"homepage": "."`), funciona igual con o sin dominio propio.

## Probar el build en local
```bash
cd frontend
yarn build
npx serve -s build
```

## Notas
- La carpeta `backend/` ya no es necesaria para la web publicada; puedes borrarla si quieres.
- El idioma (ES/EN) y la verificación 18+ se guardan en el navegador (`localStorage`), no requieren servidor.
