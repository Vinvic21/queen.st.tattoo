# Queen St Tattoo website

React 18 + Vite + React Router. Plain CSS. All business info lives in `src/data.js`.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serve the build locally
```

## Deploy
- **Vercel:** import the repo. `vercel.json` already rewrites all routes to `index.html`.
- **Netlify / Cloudflare Pages:** build command `npm run build`, publish folder `dist`. `public/_redirects` handles routing.

## Edit
- Contact details, hours, WhatsApp number, reviews, gallery, default message: `src/data.js`
- Facebook icon appears once you set `social.facebook` in `src/data.js`
- Colors and fonts: variables at the top of `src/styles.css`
- Before launch, update the `og:image` and JSON-LD `image` in `index.html` to full URLs on your domain.
