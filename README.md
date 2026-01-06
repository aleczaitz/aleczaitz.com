# aleczaitz.com — Astro Portfolio

A clean, recruiter-friendly developer portfolio built with **Astro** + **Tailwind CSS**.

## Routes

- **`/`**: Hero + featured projects + primary CTAs (resume + email)
- **`/projects`**: All projects with role, tradeoffs, tech, and impact
- **`/about`**: Background, focus areas, and what I’m seeking
- **`/resume`**: One-click PDF download (always linked in nav/footer)

## Project Structure

```text
src/
  components/
    ProjectCard.astro
    SiteFooter.astro
    SiteHeader.astro
  data/
    site.ts            # single source of truth for name/email/socials/projects
  layouts/
    Layout.astro       # SEO/OG metadata + header/footer + dark-mode script
  pages/
    index.astro        # /
    projects.astro     # /projects
    about.astro        # /about
    resume.astro       # /resume
  styles/
    global.css         # Tailwind v4 + tokens + dark-mode variant
public/
  resume.pdf
```

## Local Development

```bash
npm install
npm run dev
```

Build/preview:

```bash
npm run build
npm run preview
```

## Editing Content

Update **`src/data/site.ts`** to change:

- name/role/value proposition
- email + GitHub + LinkedIn
- project list and featured projects

Replace **`public/resume.pdf`** with your real resume (keep the filename the same).

## Deployment

This is a static Astro site, so it works well on:

- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages** (via static output)

Build output is in **`dist/`**.
