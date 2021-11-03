const a = 1000;
const b = 500;

// Logical and (&&)
console.log(2 * 400 + 200 === a && b === 500);
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// Logical and ( || )
console.log(a === 1000 || b === 0);
// true || true => true
// true || false => true
// false || true => true
// false || false => false

// Type operator
const m = 100;
const n = "I am string";
const o = true;
let p;

console.log(typeof m);
console.log(typeof n);
console.log(typeof o);
console.log(typeof p);
