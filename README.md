# Personal Portfolio (3D)

My personal developer portfolio website with interactive 3D elements, smooth section animations, and a contact form.

- **Repo**: `Ctrl-Joy/PERSONAL-PORTFOLIO`

## Tech stack

- React
- Vite
- Tailwind CSS
- Three.js (React Three Fiber / Drei)
- Framer Motion
- EmailJS (contact form)

## Features

- 3D hero and background effects
- Projects / experience / skills sections
- Responsive layout (mobile → desktop)
- Contact form (EmailJS)

## Run locally

**Prerequisites**

- Node.js (LTS recommended)
- npm

**Install & start**

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Environment variables (EmailJS)

Create a `.env` file in the project root:

```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Deploy

Any static hosting works (Vercel / Netlify / GitHub Pages via a build step). Build output is generated with:

```bash
npm run build
```

## License

This repository is for my personal portfolio. Feel free to look around for inspiration, but please don’t copy the site verbatim.
