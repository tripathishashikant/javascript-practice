const translations = {
  'Hello, my name is {0} and I am {1} years old.': 'Hola, mi nombre es {0} y tengo {1} años.',
  'Welcome back, {0}!': '¡Bienvenido de nuevo, {0}!',
};

function i18n(strings, ...values) {
  const key = strings.reduce((result, chunk, index) => {
    const placeholder = index < values.length ? `{${index}}` : '';
    return result + chunk + placeholder;
  }, '');

  const template = translations[key];
  const base = template ?? key;

  return values.reduce((result, value, index) => {
    return result.replaceAll(`{${index}}`, String(value));
  }, base);
}

const name = 'John';
const age = 30;

const translatedMessage = i18n`Hello, my name is ${name} and I am ${age} years old.`;
const welcomeMessage = i18n`Welcome back, ${name}!`;

console.log(translatedMessage);
// Expected Output: "Hola, mi nombre es John y tengo 30 años."

console.log(welcomeMessage);
// Expected Output: "¡Bienvenido de nuevo, John!"
