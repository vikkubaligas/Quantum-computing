# Trip accounts (static site)

Plain HTML + JS, no build step, no server code. Works on any shared hosting.

- `index.html` – the page
- `data.js` – all trip data (the only file that changes when spends are added)
- `.htaccess` – stops browsers caching old data

## Deploy on cPanel
1. cPanel > File Manager > `public_html` (or a subfolder such as `public_html/puri`).
2. Upload `index.html`, `data.js` and `.htaccess` (or upload a zip and Extract).
3. Open `https://yourdomain/puri/` on the phone.

To update later, re-upload only `data.js`.
