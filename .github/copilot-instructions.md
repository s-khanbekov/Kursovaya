# Copilot Instructions for this repository

- This is a small static website built with plain HTML, CSS, and JavaScript. There is no Node.js build, bundler, or test framework in the repository.
- Key pages: `index.html`, `doctors.html`, `services.html`, `contacts.html`.
- Shared assets: `style.css` and `script.js` are loaded from every page.

## What to change

- Keep the page-per-route structure. Each HTML file contains its own page content and duplicates the shared header/footer markup.
- Preserve the manual nav active state in each page: `.nav__link.active` is set directly in the HTML for the current page.
- Use existing CSS class patterns from `style.css`: utility modifiers like `btn--primary`, `btn--outline`, `btn--small`, and section classes such as `section`, `page-hero`, `container`.

## JavaScript patterns

- `script.js` contains two main behaviors:
  - doctor filtering on `doctors.html`: buttons use `data-filter`, cards use `data-cat`, and hidden cards get class `hidden`.
  - form submission on `contacts.html`: fields are identified by IDs `fname`, `fphone`, `femail`, `fspec`, `fdate`, `fcomment`, and feedback is shown in `formMsg`.
- Animations are handled with `IntersectionObserver` on elements like `.why__card`, `.news__card`, `.doctor-card`, `.service-card`, `.stat-card`.

## Styling and layout

- `style.css` defines global CSS variables, reusable button styles, and layout helpers.
- The design uses a light medical theme with soft blues, rounded cards, and a sticky header.
- Responsiveness is managed through CSS grid and flex layouts; avoid adding a new framework.

## External dependencies

- Only external resource is Google Fonts loaded in each HTML file.
- There is no server-side logic or external API integration in the current repo.

## Guidance for agents

- Do not invent a build process or package scripts unless the user explicitly asks for one.
- When editing UI text, keep the Russian language locale and medical branding consistent.
- Prefer updates inside existing HTML/CSS/JS files rather than adding new libraries.

> If any project workflow or deployment target is missing, ask for clarification before introducing new tooling.