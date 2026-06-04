# KR Connect Technologies — Website

A clean, modern one-page company website built with **Vite + React**.

## Run it locally

You need [Node.js](https://nodejs.org) installed (version 18 or newer).

Open a terminal in this folder and run:

```bash
npm install      # first time only — downloads dependencies
npm run dev      # starts the local dev server
```

Then open the link it prints (usually **http://localhost:5173**) in your browser.

## Add the founders' photos

1. Put the two photos in the **`public`** folder.
2. Name them exactly:
   - `founder-habib.jpg` — for Md Habibur Rahman
   - `founder-entaz.jpg` — for Mohammad Entaz Bahar
3. Refresh the browser. (Until then, nice initials avatars show automatically.)

Square photos (e.g. 600×600) look best.

## Languages (6 supported)

The site ships in **English, 한국어 (Korean), 中文 (Chinese), Tiếng Việt (Vietnamese),
Русский (Russian), and বাংলা (Bangla)**. Visitors switch using the 🌐 selector in the
top navigation bar, and their choice is remembered. The site also auto-selects the
visitor's browser language on first visit (falling back to English).

## Edit the content

- **Brand, contact info, icons, founder photos:** `src/data.js`
- **All translatable text (every language):** `src/i18n/translations.js`

To change wording in any language, edit that language's block in
`src/i18n/translations.js`. To add a 7th language, copy an existing block, give it a new
code, and add it to the `languages` array at the top of that file.

## Build for production

```bash
npm run build    # output goes to the dist/ folder
npm run preview  # preview the production build locally
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Project structure

```
kr-connect-website/
├── public/              # static files + founder photos go here
│   └── favicon.svg
├── src/
│   ├── components/      # Navbar, Hero, About, Services, Founders, Contact, Footer
│   ├── data.js          # ← all editable text lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # all styling
├── index.html
├── package.json
└── vite.config.js
```
