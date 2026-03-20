/**
 * Task 3: Chaining (Ek ke baad ek order)
 * Promises ko hum chain kar sakte hain.
 * Ek promise banaiye jo pehle ek number 5 return (resolve) kare.
 * Uske .then(num) mein us number ko num * 2 karke return karein.
 * Ek aur .then(result) lagayein aur final answer console mein print karein (Output 10 aana chahiye).
 */

new Promise((res) => {
    res(5)
}).then((val) => {
    return val * 2
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})