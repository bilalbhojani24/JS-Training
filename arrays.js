// array is a special type of object
const arr1 = [12, 34, 50, 100, 500];
const arr2 = ['bilal', 'rajesh', 'hari', 24, 25];
const arrObj = [
    { name: 'Rajesh', role: 'Developer' },
    { name: 'Hari', role: 'Web Developer' },
];
// another way to define array
const newArray = new Array(1, 2, 3, 4);
// console.log(arr1)
// console.log(arr2)
// console.log(arrObj)
// console.log(newArray)

const members = ['bilal', 'rajesh', 'hari', 'Ram', 'Rahim', 'Raju'];
// console.log(members); // to access array value
// console.log(members[1]); // to access array value
// console.log(members[0]); // to access array value
// console.log(members.length); // 3
// // to access last element from array
// console.log(members[members.length - 1]); // 3 - 1 = 2

// to add new element at end of array
members.push('Ascent Coaching');
console.log(members);

// to remove last element of array
members.pop();
console.log(members);

// to add new element at start of array
members.unshift('I am new member')
console.log(members);

// to remove element from start of array
members.shift();
console.log(members);

// to convert array to string
console.log(members.toString());

// to convert array to string with something between elemets
console.log(members.join(' ** '));

// to delete something in between
// Disadvantage -> It will clear but it will keep it as undefined
delete members[2];
console.log(members);

// User splice to delete elements from array [recommended]
const members1 = ['bilal', 'rajesh', 'hari', 'Ram', 'Rahim', 'Raju'];
// console.log(members1.splice(2));
members1.splice(2, 4, 'one', 'two', 'three');
console.log(members1);

console.log(arr1.concat(arr2).concat(members1));

const a = 12222
console.log(Array.isArray(members1)) // method 1 -> to get array or not
console.log(members1 instanceof Array ) // method 2 -> to get array or not

