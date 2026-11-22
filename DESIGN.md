---
name: Luis Almenarez — Edition · Índice
description: A portfolio set as an author's edition whose cover is its table of contents.
colors:
  ground: "#111110"
  ink: "#efebe2"
  ink-muted: "#a19d93"
  ink-faint: "#85817a"
  rule: "#2a2a27"
  rule-strong: "#3a3a36"
  volt: "#e8ff5a"
  sheet-paper: "#f4f1ea"
  sheet-ink: "#1a1a18"
  sheet-ink-muted: "#4a4843"
  sheet-ink-faint: "#6b6962"
  sheet-rule: "#d8d4ca"
typography:
  display:
    fontFamily: "'Noto Serif Display Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(60px, 8vw, 128px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Noto Serif Display Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(44px, 6.4vw, 104px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Noto Serif Display Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(22px, 2.1vw, 32px)"
    fontWeight: 400
    lineHeight: 1.1
    fontFeature: "lnum"
  lede:
    fontFamily: "'Noto Serif Display Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(22px, 2vw, 30px)"
    fontWeight: 400
    lineHeight: 1.22
  folio:
    fontFamily: "'Noto Serif Display Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    fontFeature: "lnum, tnum"
  body:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Pixelify Sans', ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.05em"
rounded:
  hairline: "2px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 2vw, 28px)"
  row: "20px"
  column-gap: "6vw"
  chapter-top: "14vh"
  cover-top: "112px"
components:
  pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    typography: "{typography.body}"
  pill-hover:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.ground}"
  lang-switch:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 11px 3px"
    typography: "{typography.label}"
  lang-switch-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  index-entry:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "20px 0"
  index-entry-hover:
    textColor: "{colors.volt}"
  archive-row:
    textColor: "{colors.ink}"
    padding: "22px 0"
  archive-row-hover:
    textColor: "{colors.volt}"
    padding: "22px 0 22px 12px"
  resume-sheet:
    backgroundColor: "{colors.sheet-paper}"
    textColor: "{colors.sheet-ink}"
    rounded: "{rounded.hairline}"
    padding: "64px 64px 72px"
    width: "860px"
---

# Design System: Luis Almenarez — Edition · Índice

## Overview

**Creative North Star: "The Author's Edition"**

The site is printed matter set in the dark: a near-black ground, warm paper-coloured ink, and hairline rules doing all the structural work. The cover is the book's table of contents, with the name set large on one side and the work indexed on the other, each entry joined to its page number by a dotted leader. Every section after the cover is a chapter that opens with a running head and its folio, so the numbers in the index and the numbers on the chapters are one sequence.

Density is editorial rather than dashboard: large serif titles, generous vertical space between chapters (14vh), and rows separated by 1px rules instead of boxes. There are no cards, no fills behind content and no shadows on the ground. Colour is almost absent; one volt yellow-green appears only where something matters right now, which makes it legible as a signal rather than decoration.

Motion is a single, slow, long-tailed ease. Names rise out of a mask on load, chapters unmask as they scroll in, and hovering an index entry floods the cover with that case's proof as a faint ghost italic. Everything is visible without JavaScript and collapses to instant under reduced motion.

**Key Characteristics:**
- One dark theme; there is no light mode on screen.
- Three type voices with strict jobs: serif display, pixel uppercase metadata, grotesk reading text.
- Structure by hairline rules and dotted leaders, never by containers.
- A single reserved accent (volt) for production outcomes, the hovered or focused entry, and selection.
- Book furniture as interface: index, folios, running heads, italic page numbers.

## Colors

A near-monochrome warm-dark palette with one electric accent held in reserve.

### Primary
- **Volt** (`volt`): the only chromatic colour. It marks the phrase "llevadas a producción" / "taken to production" in the cover lede, the index entry, archive row or case title under the pointer or keyboard focus, the filled state of a hovered pill, the focus outline, and the text selection. The contact email turns volt only on hover.

### Neutral
- **Lamp-black Ground** (`ground`): the page itself and the fixed top bar. Every dark surface is this one value.
- **Warm Paper Ink** (`ink`): names, titles, primary text, the pill outline, the active language segment's fill, and the strong rule under the index header.
- **Pencil Grey** (`ink-muted`): secondary reading text, descriptions, running heads, page numbers at rest, header edition line, footer strip.
- **Faint Graphite** (`ink-faint`): tertiary metadata only: step counters, locations, periods, section labels on case pages, the archive arrow at rest.
- **Hairline** (`rule`): the 1px separators between rows, under running heads, above the footer strip, and under the top bar once scrolled.
- **Strong Hairline** (`rule-strong`): the dotted index leaders, the language switch outline, and the scrollbar thumb.

### The résumé sheet
The résumé is the one surface that inverts: a light paper sheet floating on the dark ground on screen, black on white in print.
- **Sheet Paper** (`sheet-paper`) with **Sheet Ink** (`sheet-ink`) for text and the heavy rule under the name block.
- **Sheet Ink Muted** (`sheet-ink-muted`) for role and contact lines; **Sheet Ink Faint** (`sheet-ink-faint`) for dates, places and the pixel section labels; **Sheet Rule** (`sheet-rule`) for the hairlines between roles and projects.

### Named Rules
**The Volt Reserve Rule.** Volt is never at rest on a surface except on the production phrase in the cover lede. Everywhere else it is a state: hover, focus, selection. If a new element wants to be volt without being interacted with, it is the wrong element.

**The One Ground Rule.** All dark surfaces use `ground`. Depth and grouping come from rules and space, not from a second, lighter panel colour.

## Typography

**Display Font:** Noto Serif Display Variable, with italics (with Iowan Old Style, Georgia, serif)
**Body Font:** Hanken Grotesk Variable (with system-ui, sans-serif)
**Label Font:** Pixelify Sans 400 (with ui-monospace, monospace)

All three are self-hosted through @fontsource.

**Character:** A high-contrast display serif at regular weight carries the authorial voice; italics in the same family do the work of page numbers, years, counters and emphasis. A pixel face, always uppercase and small, plays the role of a printer's colophon; a quiet grotesk carries everything a visitor actually reads.

### Hierarchy
- **Display** (serif 400, `display`, line-height 0.92, tracking -0.025em): the name on the cover, set in two lines that rise from a mask.
- **Headline** (serif 400, `headline`, line-height 0.95, tracking -0.03em): case-chapter titles; the same scale reaches up to clamp(44px, 7vw, 112px) on case pages and 404, and clamp(40px, 5.6vw, 92px) for the contact heading. Balanced wrapping.
- **Title** (serif 400, `title`, line-height 1.1): index entries (minor entries 20px), company names in the career list (clamp(26px, 2.6vw, 40px)), archive names (clamp(24px, 2.4vw, 36px)), case-page section heads.
- **Lede** (serif 400, `lede`, line-height 1.22, max 21ch on the cover): the one-sentence positioning under the name; the case-page lede runs to 38ch.
- **Pull** (serif italic, clamp(26px, 2.8vw, 44px), line-height 1.1, `ink-muted`): the proof line under each case title. The ghost on the cover is the same italic at clamp(88px, 15vw, 240px) and 7% opacity.
- **Folio** (serif italic, 22px; 18px in running heads; 15px for step counters): page numbers, years, `01`–`04` counters. Lining, tabular figures.
- **Body** (grotesk 400, 16px, line-height 1.55; 17px for case descriptions): reading text at 52–64ch. Emphasis inside body uses `<strong>` at 500 in `ink` against `ink-muted` paragraphs.
- **Label** (pixel 400, 13px, tracking 0.05em, uppercase, line-height 1.3): wordmark, edition line, running heads, the index header, stack line, scroll cue, periods, footer strip. 12px with 0.06em on the résumé.

### Named Rules
**The Three Voices Rule.** Serif for names, titles, numbers and the lede; pixel for uppercase metadata; grotesk for reading text. The pixel face never sets a sentence and the grotesk never sets a title.

**The Italic Numeral Rule.** Any number that locates something (page, year range, step) is serif italic with lining figures, usually in `ink-muted` or `ink-faint`.

## Layout

The page is full-bleed with one side gutter (`gutter`, clamp(20px, 2vw, 28px)); the case page alone centres at a 1280px max width. The cover is a single 100svh spread split into two columns (1.05fr / 1fr, gap 6vw): name, lede and calls to action left; the index right; stack line and scroll cue pinned to the bottom corners. Chapters open 14vh below the previous one with a running head, then a two-column body (title and proof 1.3fr, description and flow 1fr, gap 6vw) closed by a hairline.

Lists are the primary layout primitive: index entries are a three-part grid (title / dotted leader / page), career rows a four-part grid (years 170px / company / role / place), archive rows a four-part grid with a trailing arrow cell. Row padding sits between 9px and 26px; the hairline beneath does the separating.

The top bar is fixed, a three-column grid (wordmark / edition line / language switch); the hairline under it appears only after scrolling.

Breakpoints: at 900px the cover, chapters and career rows collapse to one column and the corner lines hide; at 760px archive rows and the footer strip drop to essentials; at 640px the header hides the edition line. The résumé reflows at 700px.

## Elevation & Depth

Flat. The dark world has no shadows, no blur and no layered panels; depth is conveyed by type scale, by the ghost italic sitting behind the cover at 7% opacity, and by hairlines. The single exception is the résumé sheet, a light page lying on the dark ground, which carries one long soft drop shadow on screen and none in print.

### Shadow Vocabulary
- **Sheet on the desk** (`box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 0.8)`): the résumé paper sheet only.

### Named Rules
**The Flat Ground Rule.** Nothing on `ground` casts a shadow. A shadow means "a physical page lies here", and only the résumé is one.

## Shapes

Two radii and nothing between them. Interactive controls are full pills (`pill`): the call-to-action, the language switch and its segments. Images, the résumé sheet and the focus outline take a barely-there 2px corner (`hairline`), enough to soften a raster edge without reading as rounded. Everything else is square and open: rows are not boxed, they are underlined. The only icon is a thin stroked arrow (1.5 stroke, round caps) used for forward, back (rotated 180°) and down (rotated 90°).

## Components

### Buttons (pill)
Outlined, quiet at rest, decisive on hover.
- **Shape:** full pill (`pill`), 1px `ink` border, 14px 26px padding, 16px grotesk, arrow icon after the label with a 12px gap.
- **Hover:** fills volt with `ground` text and border; the arrow slides 4px right. Colour transitions 0.4s on the house ease.
- **Secondary links:** the text links beside a pill (Hoja de vida, LinkedIn, GitHub, "Leer el caso") are plain `ink-muted` text with an underline that draws in from the left on hover (1px, 0.5s).

### Navigation (top bar and language switch)
- **Top bar:** fixed, `ground` background, pixel labels throughout; the wordmark turns volt on hover; a `rule` hairline appears beneath once the page scrolls.
- **Language switch:** a pill outlined in `rule-strong` with 3px inner padding holding two pill segments; the current language is filled `ink` on `ground`, the other is `ink-muted` and brightens to `ink` on hover. It is always visible, including on phones.

### Index (signature)
The cover's table of contents. A pixel header ("Índice" / "Pág.") over a full-strength `ink` rule, then entries in serif title size, each with an optional 14px grotesk dek, a dotted `rule-strong` leader, and an italic folio. Minor entries (chapters that are not cases) drop to 20px. On hover or focus the title shifts 8px right and turns volt, the folio turns volt, and the cover's ghost fills with that entry's proof.

### Chapter running head
Every chapter opens with a pixel label on the left and "Pág." plus an italic serif folio in `ink` on the right, over a `rule` hairline. This is the book's running head, not a kicker: it carries the chapter's page number from the index.

### Rows (career, archive, flow)
Hairline-separated list rows with no containers. Archive rows indent 12px on hover, turn the name volt and reveal a volt arrow. Flow steps and working rules are numbered with italic leading-zero counters in `ink-faint`.

### Contact
A large serif heading, then the email in serif italic up to 48px with a 1px underline in current colour and a trailing arrow; on hover the email turns volt and the arrow moves 8px.

### Résumé sheet
An 860px light paper sheet (`sheet-paper`, `sheet-ink`, 2px corner, 64px / 72px padding, the one shadow) on the dark ground, with a pill print button above it. Serif name, pixel section labels, grotesk body at 14.5px, roles separated by `sheet-rule` hairlines. In print it becomes black on pure white with no shadow and no chrome.

### Motion
One ease for everything: `cubic-bezier(0.16, 1, 0.3, 1)`. The name rises from a mask (1.2s), the lede, index and calls to action fade up 10px in a short stagger, chapter titles and career rows unmask from the top (clip-path, 1.1s) when they enter the viewport. Content is visible without JavaScript; the hidden start state only applies once the script marks the document. Under reduced motion every transition and animation becomes instant and reveals are disabled.

## Do's and Don'ts

### Do:
- **Do** separate content with 1px `rule` hairlines and vertical space; let rows, not boxes, carry structure.
- **Do** keep volt to the production phrase, hover and focus states, and selection (The Volt Reserve Rule).
- **Do** set page numbers, years and step counters in serif italic with lining figures (The Italic Numeral Rule).
- **Do** give every new chapter a running head with its folio so it stays in the index's page sequence.
- **Do** use the single house ease `cubic-bezier(0.16, 1, 0.3, 1)` and keep content visible without JavaScript and under reduced motion.
- **Do** use only the two radii: 999px for controls, 2px for images, the sheet and focus.

### Don't:
- **Don't** add a light mode or a second dark surface colour; the world has one ground.
- **Don't** set running text, sentences or titles in the pixel face; it is uppercase metadata only.
- **Don't** put content in cards, filled panels or shadowed boxes on the dark ground (The Flat Ground Rule).
- **Don't** leave volt on at rest on any element other than the production phrase.
- **Don't** place a pixel label above a headline as a kicker; the running head with its folio is the only label that precedes a chapter.
- **Don't** use glyph or emoji icons; the stroked arrow is the only icon and it rotates for direction.
