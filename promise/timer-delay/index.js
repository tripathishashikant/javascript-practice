/**
 * Task 1: Ek simple Delay (Timer) banaiye
 * Ek Promise banaiye jo theek 3 seconds (3000ms) baad resolve ho aur console par "Hello, 3 seconds poore ho gaye!" print kare. Hint: setTimeout ka use karein aur uske andar resolve() call karein.
 */

const showErr = false

const testPromise = new Promise((resolve, reject) => {
    if (showErr) reject('Hello, Error aagai!')

    setTimeout(() => {
        resolve('Hello, 3 seconds pure ho gaye!')
    }, 3000)
})

testPromise.then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})