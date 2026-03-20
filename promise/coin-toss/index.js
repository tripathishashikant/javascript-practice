/**
 * Task 2: Coin Toss (Pass/Fail)
 * Ek aisi Promise banaiye jo random aadhar par pass ya fail ho:
 * Math.random() ka use karke ek number generate karein.
 * Agar number 0.5 se bada hai, toh usko resolve("Heads: Jeet gaye!") karein.
 * Agar 0.5 se chota hai, toh reject("Tails: Haar gaye!") karein.
 * Ise .then() aur .catch() se handle karein.
 */

const coinToss = new Promise((resolve, reject) => {
    const tossRes = Math.random(); 

    if (tossRes > 0.5) {
        resolve("Heads: Jeet gaye!");
    } else {
        reject("Tails: Harr gaye!");
    }
});

coinToss.then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})