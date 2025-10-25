This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design Overview
The color palette combines soft pink tones (#fce4ec) with deep burgundy accents (#2b0f16) to evoke warmth and elegance, while maintaining strong contrast for readability.
Typography relies on sans-serif fonts (like Inter or Poppins) for clarity and a contemporary feel.

## Development Workflow

This portfolio was built with **Next.js (React)** using a modular, component-driven architecture to ensure clarity and scalability.

### ⚙️ Project Structure
- **`/app/page.js`** — main entry point defining the structure of the homepage.
- **`/app/components/`** — reusable UI components such as:
  - `Curtain` – interactive intro animation before the content appears.
  - `FashionShow` – project showcase carousel.
  - `ContactModal` – form component integrated with Google Forms.
- **`/public/`** — stores static files and media assets (e.g., profile images, project visuals, CV PDF).
- **`/app/globals.css`** — contains all global styles, including:
  - CSS variables for colors, typography, and shadows.
  - Layout adjustments and responsive behavior.
  - Custom animations for hover, transitions, and modals.

---

###  Technical Stack
- **Framework**: [Next.js 15](https://nextjs.org) (React-based)
- **Styling**: Tailwind-inspired custom CSS with variables (`:root`)
- **Animations**: CSS keyframes for smooth fade and curtain effects
- **Forms**: Integrated Google Forms for external submissions
- **Icons**: [Font Awesome 6](https://fontawesome.com)
- **Typography**: [Poppins](https://fonts.google.com/specimen/Poppins) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Deployment**: Hosted on [Vercel](https://vercel.com)

---

###  Responsiveness & Testing
The layout was tested on:
- **Mobile**: iPhone SE / 12 / 14
- **Tablet**: iPad / Galaxy Tab
- **Desktop**: Chrome, Safari, and Edge

Responsive adjustments are made using media queries defined at the end of `globals.css`.

---

###  Typical Workflow
1. Edit UI components in `/app/components/`
2. Update styles in `/app/globals.css`
3. Preview changes locally with:
   ```bash
   npm run dev
4. Commit updates to GitHub with clear messages
5. Push to the main branch — Vercel auto-deploys the latest version
6. Test on multiple devices and browsers before final publishing

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform(https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)the creators of Next.js.

Check out the Next.js deployment documentation(https://nextjs.org/docs/app/getting-started/deploying)for more details.

## 🌐 Live Demo
👉 [View Portfolio on Vercel](https://portfolio-rose-chi-87.vercel.app/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
