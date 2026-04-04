# Problem: Internationalization (i18n) Translator

Create a tagged template function named `i18n` that translates a template literal
using a predefined dictionary.

## The tag should

- Extract the static strings to form a translation key (e.g. by joining them with placeholders like {0}, {1}).
- Look up this newly constructed key in the `translations` object.
- Replace the placeholders in the translated string with the actual dynamic values.