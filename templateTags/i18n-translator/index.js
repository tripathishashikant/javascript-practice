/*
 * Problem: Internationalization (i18n) Translator
 * 
 * Create a tagged template function named `i18n` that translates a template literal
 * using a predefined dictionary. 
 * 
 * The tag should:
 * 1. Extract the static strings to form a translation key (e.g. by joining them with placeholders like {0}, {1}).
 * 2. Look up this newly constructed key in the `translations` object.
 * 3. Replace the placeholders in the translated string with the actual dynamic values.
 */

const translations = {
    "Hello, my name is {0} and I am {1} years old.": "Hola, mi nombre es {0} y tengo {1} años.",
    "Welcome back, {0}!": "¡Bienvenido de nuevo, {0}!"
};

function i18n(strings, ...values) {
    // Your code here
}

const name = "John";
const age = 30;

const translatedMessage = i18n`Hello, my name is ${name} and I am ${age} years old.`;
const welcomeMessage = i18n`Welcome back, ${name}!`;

console.log(translatedMessage); 
// Expected Output: "Hola, mi nombre es John y tengo 30 años."
console.log(welcomeMessage);
// Expected Output: "¡Bienvenido de nuevo, John!"