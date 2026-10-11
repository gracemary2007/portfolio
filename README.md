# Accessible Portfolio Website

Multi-page portfolio built with semantic HTML5, WCAG 2.2 AA colour contrast, ARIA where native HTML is not enough, and SEO meta tags. No frameworks, no build step.

## Pages
`index.html` (home), `about.html`, `projects.html`, `contact.html`

## Accessibility features
- Landmarks: `header`, `nav` (labelled), `main`, `section` (labelled by headings), `article`, `footer`
- Skip link, one `h1` per page, logical heading order
- `aria-current="page"`, `aria-describedby`, `aria-invalid`, and `role="status"` live region for form feedback
- Visible focus styles, fully keyboard navigable, reduced-motion support
- Contact form with explicit labels, autocomplete hints and inline error messages

## SEO features
Unique `title` and meta description per page, Open Graph tags, JSON-LD `Person` data, `robots.txt`, descriptive link text.

## Before you submit
1. Replace `your-username`, `you@example.com` and project text.
2. Create a form at formspree.io and put its ID in the `action` in `contact.html`.
3. After deploying, add `<link rel="canonical" href="https://your-username.github.io/page.html">` to each page.

## Deploy on GitHub Pages
```
git init
git add .
git commit -m "Add accessible portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```
Then go to Settings > Pages > Deploy from branch `main` / root.

## Test
Chrome DevTools > Lighthouse > run Accessibility and SEO audits.
