# Mahoraga ZEN — Landing Page

> ปรัชญาแห่งการตื่นรู้ · ปัญญาแห่งผ่องแผ้ว

Landing page สำหรับ Mahoraga ZEN brand — ผสมผสานปรัชญาตะวันออก + wellness

**Live:** https://mahoraga-zen.netlify.app

---

## 🚀 ลักษณะ

### Sections (13)
- **Hero** — Brand intro + proof stats
- **Features** — 4 key benefits
- **Fortune** — Thai birthday reader (8 days)
- **Lucky Numbers** — Daily + 14-day tracker
- **Merit Events** — Dharma opportunities
- **Membership** — ฿50/month
- **Products** — E-books, MP3s
- **Shop** — Affiliate goods
- **Audio** — Web Audio drone synth
- **Testimonials** — 5-quote carousel
- **Newsletter** — Email signup
- **Footer** — Links + contact
- **Cart** — Slide-in drawer

---

## 💻 Tech Stack

- **React 18** + Babel standalone
- **Web Audio API** — Tone + LFO
- **CSS Grid/Flexbox** — Responsive
- **Web Fonts** — Google Fonts Thai
- **Intersection Observer** — Scroll triggers

Bundle: ~120 KB gzipped

---

## 📁 Structure

```
/
├── index.html
├── src/
│   ├── styles.css
│   ├── app.jsx + 17 more components
│   ├── ornaments.jsx
│   └── tweaks-panel.jsx
├── assets/           # 5 sacred images
├── netlify.toml      # Deployment config
└── README.md
```

---

## 🏃 Local Preview

```bash
python3 -m http.server 3456
# or
npx http-server -p 3456
```

Open: http://localhost:3456

---

## 🚢 Deploy to Netlify

1. Go to https://app.netlify.com
2. Sign in with GitHub
3. "New site from Git" → `mahoragazen/mahoraga-zen`
4. Site name: `mahoraga-zen`
5. Deploy!

**Auto-redeploy:** Every `git push origin main`

---

## 📖 Full Docs

See `/Obsidian/Obsidian Vault/wiki/projects/`:
- **Mahoraga-ZEN-Website.md**
- **Architecture.md**
- **Components-Inventory.md**

---

## 🔄 Git Workflow

```bash
git add .
git commit -m "description"
git push origin main  # Auto-deploys!
```

---

© 2026 Mahoraga ZEN · บริษัท มโหราคะเซน จำกัด
