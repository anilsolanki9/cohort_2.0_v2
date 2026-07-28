# HTML Mastery Test — "Personal Hub" Website

## The brief

Build a **single-page website** called _"My Personal Hub"_ — a fictional personal
site that combines a **portfolio + blog + recipe section + contact form** into
one page. No CSS required, no JS required (a couple of native-HTML interactive
bits are allowed/encouraged — `<details>`, `<dialog>`). The goal is **pure
HTML**, using as many meaningful native elements/attributes as make sense,
and following semantic + accessibility best practices throughout.

Think of it as an HTML feature checklist disguised as a real webpage.

---

## Constraints

- Single `.html` file, plain HTML5 only (CSS/JS optional, not the focus)
- Must validate cleanly on the [W3C Validator](https://validator.w3.org/) — zero errors
- Every non-semantic `<div>`/`<span>` you reach for, ask first: "is there a
  more meaningful tag for this?"
- No `<br>` for spacing, no `<b>`/`<i>` where a semantic tag exists instead
- Images can be placeholder URLs (e.g. via `https://picsum.photos/`)

---

## Phase 1 — Document skeleton & metadata

Before any visible content, get the invisible stuff right:

1. `<!DOCTYPE html>`, `<html lang="en">`
2. `<head>` with: `<meta charset="UTF-8">`, `<meta name="viewport" ...>`,
   `<title>`, `<meta name="description">`
3. Add a `<link rel="icon">` (favicon) — even a fake path is fine
4. Add Open Graph tags: `og:title`, `og:description`, `og:image` (you
   already learned these earlier in our chat — apply them here)
5. Add a **"skip to main content"** link as the very first thing inside
   `<body>` (an `<a href="#main">` hidden visually but present in DOM) —
   core accessibility pattern

---

## Phase 2 — Page skeleton (landmark elements)

Structure the whole page using **landmark semantic tags**, not divs:

- `<header>` — site title/logo area + intro tagline
- `<nav>` — links to each section on the page (`#about`, `#blog`, `#recipes`,
  `#contact`) using an actual `<ul>` list inside
- `<main>` — wraps everything below nav (only one `<main>` per page — rule
  to remember)
- `<footer>` — copyright, social links, contact `<address>`
- Each major content block inside `<main>` should be a `<section>` with a
  unique `id` and its own heading (`<h2>`)

**Checkpoint:** by end of this phase, page should have zero content yet
inside sections — just the shell.

---

## Phase 3 — About / portfolio section

Inside `#about` section:

1. A profile `<figure>` containing an `<img>` (with proper `alt`) and a
   `<figcaption>`
2. A short bio paragraph using `<p>`, with at least one `<abbr title="...">`
   (e.g. `HTML`, `CSS`) and one `<dfn>` for a term you define inline
3. A skills list as `<ul>` — but wrap each skill in a `<mark>` if it's a
   "core" skill to visually flag it
4. A `<blockquote>` with a testimonial, including `<cite>` for the source
5. Use `<time datetime="...">` somewhere (e.g. "Coding since <time
   datetime="2022">2022</time>")

---

## Phase 4 — Blog section

Inside `#blog` section, list 2–3 fake blog post previews. For each post use
an `<article>` (not just a div — articles are independently distributable
content):

1. `<h3>` title inside each article
2. `<time datetime="YYYY-MM-DD">` for publish date
3. A short `<p>` excerpt
4. A `<details>` + `<summary>` block — "Read more" that expands to reveal
   extra fake paragraph text (native accordion, no JS needed)
5. Wrap tags/categories list using `<ul>` with each tag as `<li>`
   
**Bonus:** add an `<aside>` next to (or after) the blog list with "related
posts" or "popular tags" — asides represent tangentially related content.

---

## Phase 5 — Recipes section (this is where tables + forms shine)

Inside `#recipes` section, pick one fake recipe:

1. A `<table>` for the ingredient list — must include:
   - `<caption>` describing the table
   - `<thead>` with `<th scope="col">` for column headers (Ingredient,
     Quantity, Unit)
   - `<tbody>` with actual rows
   - `<tfoot>` optionally showing a "total items" row
2. An **ordered list** `<ol>` for the cooking steps (steps have inherent
   order — this is the correct tag, never `<ul>`)
3. A `<video>` element (even a placeholder/sample video URL) with:
   - `controls` attribute
   - A `<track kind="captions">` child (even pointing to a dummy .vtt file —
     shows you know captions exist)
   - Fallback text between the tags for unsupported browsers
4. Wrap the whole recipe block in `itemscope itemtype="https://schema.org/Recipe"`
   with a couple of `itemprop` attributes — this is optional but shows
   awareness of structured data / microdata (helps with Google rich
   snippets in real life)

---

## Phase 6 — Contact form (the big one)

Inside `#contact` section, build a form using `<form>` with **at least 8
different input types**, properly labelled and grouped:

1. Wrap related fields in `<fieldset>` with a `<legend>` (e.g. "Your
   details" vs "Message")
2. Every input must have an associated `<label for="...">` — no orphan
   inputs
3. Required input types to include (mix and match meaningfully):
   - `type="text"` (name) — with `required` and `minlength`
   - `type="email"` — native email validation
   - `type="tel"` — with a `pattern` attribute
   - `type="url"` — for a portfolio link
   - `type="number"` — with `min`/`max` (e.g. "years of experience")
   - `type="range"` — e.g. "budget slider" — paired with an `<output>`
     showing live value (you covered `<output>` earlier)
   - `type="date"` — preferred contact date
   - `type="color"` — "pick a theme color" fun field
   - `type="checkbox"` — newsletter opt-in
   - `type="radio"` — preferred contact method (group with same `name`)
   - `type="file"` — attach a resume — with `accept="..."` restricting
     file types
4. Add a `<select>` with `<optgroup>` (grouped options — e.g. group
   countries by continent) — a step up from the plain `<select>` you asked
   about earlier
5. Add a `<datalist>` linked to a text input for autocomplete suggestions
6. Add a `<textarea>` for the message, with `maxlength`
7. Submit button as `<button type="submit">`, plus a `<button
type="reset">`
8. Use `autocomplete` attributes meaningfully (`autocomplete="email"`,
   `autocomplete="tel"`, etc.)

---

## Phase 7 — Native dialog (interactive, no JS needed to trigger visibility)

Add a `<dialog>` element somewhere (e.g. "Newsletter signup" popup or
"Thank you" confirmation) — even without JS, you can demonstrate the tag
correctly with the `open` attribute toggled manually for now, and mention
in a comment that `showModal()` would control it via JS in production.

---

## Phase 8 — Footer

1. `<address>` for contact info (this tag is specifically for contact
   info of the author/owner — not general addresses)
2. Social links — use an `<ul>` of `<a>` tags, each with `aria-label`
   describing the platform (icons often have no visible text)
3. Copyright line using the `&copy;` entity + `<time datetime="2026">`

---

## Phase 9 — Accessibility pass (do this last, on the whole page)

Go back through everything and check:

- [ ] Every `<img>` has meaningful `alt` (decorative images get `alt=""`)
- [ ] Heading hierarchy is correct — no skipping from `<h2>` to `<h4>`
- [ ] Every form input has a real `<label>`, not just a placeholder
- [ ] `<nav>` has `aria-label="Main navigation"` if there's more than one
      `<nav>` on the page (footer nav vs header nav)
- [ ] Color-only information isn't the sole way to convey meaning anywhere
- [ ] `<iframe>` (if you add one, e.g. embedding a map) has a `title`
      attribute — required for screen readers
- [ ] Run it through the W3C validator — fix every error

---

## Stretch goals (if you want to go further)

- Add a `<noscript>` block with a fallback message
- Add `<link rel="canonical">` in head
- Use `<picture>` with multiple `<source>` for responsive images
  (`srcset`/`sizes`)
- Add `rel="noopener noreferrer"` on any external `target="_blank"` links
  (security best practice)
- Use ARIA landmark roles explicitly as a learning exercise even where
  HTML5 tags already imply them (`role="navigation"` on `<nav>`) — just
  to see the mapping, not because it's necessary

---

## How to self-check when done

1. View source and re-read it as if you're a browser with no CSS —
   does the raw structure still make logical sense top to bottom?
2. Disable images — do all `alt` texts make sense standing alone?
3. Try tabbing through the whole page with keyboard only (no mouse) —
   does focus order make sense, can you reach and use the form fully?
4. Paste the file into the W3C validator — zero errors is the finish line.
