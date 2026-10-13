# Landing page design philosophy

## The experience we want

GyanMirai should feel like a considered school platform made by people who understand education.
The landing page helps school owners, principals, administrators, and teachers understand the product and reach the team with confidence.
Warmth comes from the editorial presentation.
Trust comes from clear language, authentic product evidence, and reliable interactions.

## Product clarity comes first

The hero identifies an AI-powered school operating system for CBSE and Gujarat Board schools.
Supporting copy connects that promise to admissions, academics, fees, staff, and communication.
Visitors should understand the product before interpreting decorative artwork.
Keep a readable product screenshot beside or below the headline, with a direct contact action.
The narrative moves through product, belief, configurability, school operations, intelligence, community, studio, and contact.
Each section should answer a useful visitor question and earn its space.

## An editorial studio character

Cream backgrounds and paper layers evoke learning materials and a working studio.
Forest text and emerald accents connect that warmth to the GyanMirai identity.
Large serif headlines, italic emphasis, and a hand-drawn underline give the page a recognisable voice.
Small sans-serif labels organise information without competing with the headline.
Coral and yellow support the illustrations.
Use generous whitespace, measured section rhythm, and a limited set of expressive details.
Keep the real product interface level and legible inside its frame.

## Evidence deserves precision

Use actual product screenshots when explaining the application.
Preserve interface labels, figures, and chart rendering.
Captions identify the screen and its synthetic demonstration data.
Demo figures are not company adoption or customer results.
The paper amphitheatre illustrates people and knowledge coming together.
The paper school kit explains configurable structures conceptually.
Neither illustration is an application screen.
Example metrics and school cards remain on the clearly labelled design-preview page.
Publish testimonials, school names, and adoption figures only when accuracy and attribution are approved.
Distinguish product direction from functionality demonstrated in the application.

## Accessibility is part of the composition

Semantic headings, descriptive links, image alternatives, and a skip link create a clear reading order.
Keyboard focus must remain visible against its background.
Decorative SVG elements are hidden from assistive technology.
The mobile menu exposes its expanded state, supports Escape, and returns focus appropriately.
Content and navigation remain available without JavaScript.
Typography and layouts must tolerate enlarged text.
Grid children must shrink and wrap without horizontal overflow.
Large screens place the capture beside the copy; smaller layouts stack it when readability benefits.
The existing 901 to 1200 pixel hero rule gives the screenshot a wider stacked frame.

## Motion should help orientation

The hero and underline enter once with short, restrained animations.
Movement draws attention to meaning while preserving immediate access to content.
Respect `prefers-reduced-motion` by disabling decorative animations and smooth scrolling.
Avoid continuous motion and interactions that conceal essential information.

## A contact journey that works

Primary actions invite visitors to talk to the team.
They lead to real telephone, email, and demo-request destinations on a dedicated contact page.
Show submission success only when a functioning service accepted a request.
Keep marketing navigation and school sign-in clearly identified.

## Simple engineering sustains the design

Static HTML owns content and section navigation.
Shared CSS owns tokens, layout, and responsive behaviour.
Small JavaScript modules enhance navigation and render illustrative preview data.
This repository has no runtime framework, database, or authenticated application.
Keep assets local, logo geometry intact, and filenames descriptive.
Add complexity when a concrete visitor need requires it.
Review dependencies and interactions for accessibility, performance, and maintenance implications.

## Review questions

- Can visitors identify the product and audience from the first screen?
- Does each section explain something useful about the school experience?
- Are logos, colours, typography, and illustrations coherent?
- Is product evidence authentic, readable, and honestly captioned?
- Are planned capabilities and example figures clearly identified?
- Can visitors navigate and contact the team with a keyboard or small screen?
- Is the experience usable with reduced motion, enlarged text, and JavaScript disabled?
- Does the built output contain only the intended current design?
