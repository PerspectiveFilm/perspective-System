# Perspective HQ

Internal dashboard for Perspective Film.

- `app.html` – the dashboard (no business data inside; data lives in Firebase behind Google sign-in).
- `loader.js` – tiny loader embedded on Squarespace; fetches the latest `app.html`.

Squarespace code block:

```html
<div id="pf-host"></div>
<script src="https://perspectivefilm.github.io/perspective-System/loader.js"></script>
```
