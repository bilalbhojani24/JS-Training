// const name = "Lionel Messi";

// string indexing starts from 0

// console.log(name);
// // string length
// console.log(name.length);
// To fetch certain character from string (property access)
// console.log(name[name.length - 1]);
// console.log(name[2]);

// slice method
// console.log(name.slice(3, 10));
// console.log(name.slice(-6, -2));

// substring method
// console.log(name.substring(2, 3))
// (1 => indexing 0, 2 => first 5 things from string)

// substr method
// console.log(name.substr(2,3))

/**
 * 1. substring => It will start slicing from index 0
 * substring(from, to)
 * 
 * substr => It will start slicing from (parameter 1) index
 * substr(from, length)
 */

// const name = "LIONel Messi";
// // replace method
// console.log(name.replace('i', 'Ronaldo')); // its case sensitive

// // uppercase
// console.log(name.toUpperCase())

// // lowercase
// console.log(name.toLowerCase());

// const a = 'Rajesh T';
// const b = 'Hari';
// console.log(a.trim() + ' & ' + b.trim() + ' are developers')

// // spilt
// const fullName = '   Rajesh FatherName lastName';
// console.log(fullName.split(' '));

// // string lateral
// console.log(`I am string lateral. ${a} and ${b} are my students. Addition is ${1 + 2} `)

const str = 'Rajeshhhhhh';
console.log(str.indexOf('p'));
console.log(str.charAt(100));
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());

let newStr = '   Rajesh        ';
for (let i = 1; i <= 15; i++){
    newStr += 'h'
}
console.log(newStr);
console.log(newStr.trim());

const num = 3;
console.log(typeof num)
console.log(typeof num.toString())
console.log(typeof num)
