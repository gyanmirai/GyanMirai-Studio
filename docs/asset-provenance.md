# Asset provenance

## Brand identity

The full logo comes from the existing GyanMirai brand package.
It matched the central `Logo+Typography.svg` exactly on 2026-10-13.
The current page variant preserves logo geometry while adjusting its emerald treatment.
The page and README reference local SVG assets directly.

## Current hero screenshot

`src/assets/reporting-ddvs-light.webp` shows actual light-mode student reporting UI.
The recorded source was the signed-in application at `https://app.gyanmirai.in/student/dashboard/` on 2026-10-07.
The DDVS tenant had previously been approved as synthetic demonstration data.
The screen showed student and enrollment totals, enrollment movement, and attendance context.
The original crop is `design/product-captures/reporting-ddvs-light-2026-10-07.jpg`.
The recorded crop was x=368, y=73, width=1250, height=662 from a 1625 by 951 pixel capture.
It excludes account controls, notifications, navigation columns, and individual records.
Lossless WebP preserves interface text without another lossy encoding.
The visible caption distinguishes real UI and synthetic DDVS data from company adoption.

## Illustrations

`src/assets/knowledge-amphitheatre.webp` is generated brand artwork with layered ivory paper and an orange centre against a forest backdrop.
It expresses people and knowledge coming together and is labelled as a brand illustration.
Its original is `design/knowledge-amphitheatre-original.png`.
`art-provenance.txt` records its generation brief and medium.
`src/assets/paper-school-kit.svg` illustrates configurable school structures conceptually.
Neither illustration claims to be an application screenshot.

## Example layouts and retained local files

`src/data/design-examples.json` contains illustrative figures and school-card examples.
Only `/design-preview/` renders them through `src/proof-preview.js`.
The homepage does not load that data or renderer.
Earlier design pages, unused captures, concept renders, and QA artifacts remain outside the tracked content.
The build excludes locally retained `/previous/` and `/studio-v1/` pages.
Remove personal controls and obtain approval for new attributable customer evidence before publication.
