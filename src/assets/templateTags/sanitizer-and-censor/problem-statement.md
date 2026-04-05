# Problem: HTML Sanitizer and Censor (XSS Protection)

Create a tagged template function named `renderSafeHtml` that safely builds HTML strings.

## The tag should

- Escape any HTML characters (<, >) in the dynamic user input to prevent XSS attacks.
- Censor any bad words from the dynamic user input using the provided `badWordsList`.
- Leave the static strings (the developer-authored HTML) completely untouched.
