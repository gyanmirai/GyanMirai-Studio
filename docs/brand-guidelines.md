# GyanMirai brand guidelines

![GyanMirai logo](../src/assets/gyanmirai-logo-dark.svg)

## Identity

Spell the name **GyanMirai** consistently.
Use supplied SVG assets instead of rebuilding the logo in text or generated imagery.
The full `gyanmirai-logo.svg` matched the central `Logo+Typography.svg` byte-for-byte during repository preparation on 2026-10-13.
Its official emerald is `#00A76F`.
The page's `gyanmirai-logo-dark.svg` retains the geometry and uses `#007F56` for its cream-background treatment.

| Asset | Purpose |
| --- | --- |
| `src/assets/gyanmirai-logo.svg` | Original full logo and wordmark |
| `src/assets/gyanmirai-logo-dark.svg` | Current header, footer, and README |
| `src/assets/gyanmirai-icon.svg` | Brand symbol and current favicon |
| `src/assets/gyanmirai-wordmark.svg` | Supplied standalone wordmark |
| `src/assets/gyanmirai-wordmark-dark.svg` | Supplied darker wordmark |

Preserve aspect ratio, path geometry, and clear surrounding space.
Do not stretch, rotate, crop, redraw, or replace the logo with an illustration.
Check visibility against the actual background.

## Landing page palette

CSS custom properties in `src/styles.css` are the website source of truth.

| Token | Value | Role |
| --- | --- | --- |
| `--cream` | `#F4EACE` | Page background |
| `--paper` | `#FFFAF0` | Raised paper surfaces |
| `--ink` | `#153D32` | Text and forest framing |
| `--green` | `#007F56` | Calls to action and emphasis |
| `--coral` | `#E39277` | Illustration accent |
| `--yellow` | `#ECC857` | Illustration accent |
| `--line` | `#B4B59C` | Borders and dividers |
| `--muted` | `#506052` | Secondary text |

Use colour roles consistently and check contrast for each text/background pairing.
Decorative accents do not replace readable foreground colours.

## Typography and imagery

The website uses local Georgia and Times New Roman for its serif voice, with Trebuchet MS and Arial for body text.
Annotations use local handwriting or system treatments.
These website choices are distinct from the central corporate Inter typography convention.
Keep headlines expressive, body copy comfortable, and labels restrained.
Use the approved reporting capture for product proof.
Use the paper amphitheatre and school kit for brand and configuration concepts.
Preserve captions and never present generated artwork as an actual application screen.
See [asset provenance](asset-provenance.md) before replacing images.
