/**
 * Task 4: Promise.all() ka Use
 * 3 chote promises banaiye:
 * p1: 1 second baad resolve ho "A" ke sath.
 * p2: 2 seconds baad resolve ho "B" ke sath.
 * p3: 3 seconds baad resolve ho "C" ke sath.
 * Ab Promise.all([p1, p2, p3]) ka use karein aur .then() mein dekhein ki output kya aata hai. (It should wait 3 seconds and print ["A", "B", "C"]).
 */

const p1 = new Promise((res) => {
    setTimeout(() => {
        res('A')
    }, 1000)
})

const p2 = new Promise((res) => {
    setTimeout(() => {
        res('B')
    }, 2000)
})

const p3 = new Promise((res) => {
    setTimeout(() => {
        res('C')
    }, 3000)
})

Promise.all([p1, p2, p3]).then((val) => {
    console.log(val)
}).catch((err) => {
    console.error(err)
})
