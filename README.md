<p align="center">
  <img src="src/assets/gyanmirai-logo-dark.svg" alt="GyanMirai" width="294" />
</p>

# GyanMirai Studio

**Built around your school. Designed for its people.**

The current GyanMirai landing website presents an AI-powered school operating system for CBSE and Gujarat Board schools.
It tells a practical story about admissions, academics, fees, staff, and communication through a warm editorial studio design.
This private repository contains the current website, official brand assets, and the principles that guide future changes.

[Design philosophy](docs/design-philosophy.md) · [Brand guidelines](docs/brand-guidelines.md) · [Asset provenance](docs/asset-provenance.md)

## Why this design

School software should feel understandable, thoughtful, and grounded in the people who use it.
Cream paper, forest green, expressive serif headlines, and restrained movement make the site welcoming while real product imagery gives the story substance.
The first screen explains the product and audience, then leads visitors through vision, configurability, school operations, and contact.

- Make the product and its school audience clear immediately.
- Give the brand a recognisable editorial character.
- Show authentic product evidence with honest captions.
- Keep navigation, typography, and imagery accessible on small screens.
- Distinguish current capabilities, future direction, and illustrative examples.
- Use a small, maintainable static implementation.

## Run locally

Requires Node.js 20 or newer.
There are no package dependencies to install.

```powershell
git clone https://github.com/gyanmirai/GyanMirai-Studio.git
cd GyanMirai-Studio
npm run dev
```

Open [http://127.0.0.1:3057/](http://127.0.0.1:3057/).
The server binds to localhost.
To select another port in PowerShell, set `$env:PORT = "3058"` before starting it.

## Check and build

```powershell
npm run check
npm run build
node scripts/serve.mjs --dist
```

`check` validates JavaScript syntax.
`build` creates a fresh `dist/` containing the current source and assets.
The preview command serves that output on localhost.
Stop any preview on the same port first, or select another port.

The output is suitable for a static host that serves directory `index.html` files and root-relative assets.
The bundled server is a local preview tool.
Publishing this repository does not deploy the website or change the existing GyanMirai site.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Current school operating system homepage |
| `/contact/` | Call, email, and existing demo-request destinations |
| `/design-preview/` | Internal example school evidence and metric layouts |

The design-preview page contains labelled example data and requests `noindex,nofollow`.
That directive is an indexing preference, not access control.
Review whether to publish this route when choosing a hosting destination.
Earlier `/previous/` and `/studio-v1/` designs are excluded from this repository and its build.

## Project map

| Path | Responsibility |
| --- | --- |
| `src/index.html` | Homepage and product narrative |
| `src/contact/index.html` | Contact journey |
| `src/design-preview/index.html` | Internal example layouts |
| `src/styles.css` | Visual tokens and responsive presentation |
| `src/main.js` | Progressive mobile navigation |
| `src/proof-preview.js` | Example data rendering and error handling |
| `src/data/` | Explicitly illustrative preview data |
| `src/assets/` | Logos, illustrations, and product imagery |
| `scripts/` | Local preview and static build |
| `docs/` | Design philosophy, branding, and asset sources |
| `design/` | Current illustration and hero capture originals |

## Content and evidence

The hero shows actual reporting UI using the previously approved synthetic DDVS demo data.
Its caption distinguishes product evidence from customer adoption.
Brand illustrations communicate an idea and remain labelled as illustrations.
The homepage does not publish invented testimonials, adoption statistics, team profiles, or certification claims.
Student and parent mobile applications are explicitly described as planned.
AI wording describes product direction without promising unverified capabilities.

Primary calls to action reach `/contact/`.
That page links to telephone, email, and the existing [demo request](https://gyanmirai.in/request-demo).
It does not simulate a form submission or claim a lead has been stored.

## Making changes

Read the design philosophy and brand guidelines before changing the page.
Use semantic HTML, shared CSS tokens, and the existing small JavaScript modules.
Preserve meaningful section anchors and contact destinations unless their change is intentional.
Check keyboard navigation, focus visibility, mobile menus, reduced motion, enlarged text, image loading, and widths of 360, 390, 768, 1440, and 1920 pixels.
Verify the built output as well as the source preview.
Use `user/yvadher/<short-kebab-case-name>` branches based on `main` for subsequent work.
Merge changes to `main` only after explicit approval.

Generated builds, archives, logs, environment files, and local QA material are ignored.
No deployment workflow is included.
The repository and brand assets remain private; no open-source licence is granted by this publication.
