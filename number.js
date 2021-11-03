const num = 1000.00;
const decNum = 12.24356;
const expoNum = 123e-5;

console.log(typeof num)

console.log(typeof num.toString()) // string
console.log(typeof num) // number

const typeNum = decNum.toString(); // 12.24356 -> string
console.log(typeof typeNum) // string
console.log(Number(typeNum)) // number (option 1)
console.log(typeof typeNum) // string
console.log(parseInt(typeNum)) // number (option 1)
console.log(parseFloat(decNum)) // number (option 1)

const a = 112.245678; 

console.log(parseFloat(a).toFixed(2)); //12.25
console.log(parseFloat(a).toPrecision(5)); //12.25


console.log(123 / Number('a'))
console.log(isNaN(123))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)

