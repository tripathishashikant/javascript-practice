const translations = {
  'Hello, my name is {0} and I am {1} years old.': 'Hola, mi nombre es {0} y tengo {1} a\u00f1os.',
  'Welcome back, {0}!': '\u00a1Bienvenido de nuevo, {0}!',
};

function i18n(strings, ...values) {
  // Your code here
}

const name = 'John';
const age = 30;

const translatedMessage = i18n`Hello, my name is ${name} and I am ${age} years old.`;
const welcomeMessage = i18n`Welcome back, ${name}!`;

console.log(translatedMessage);
console.log(welcomeMessage);
