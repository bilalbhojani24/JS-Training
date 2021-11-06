// const arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// // Task - I want to add +10 to all the items(elements) of the array [arr]

// // forEach => It will loop over array, it will return undefined, it will not create new array
// const b = [];

// const c = arr.forEach((item, index, arr) => {
//     item = item + 10;
//     b.push(item);
// });
// console.log(c);
// console.log(b);

// // map => It will loop over array, it will return new array, and it will create new array

// const sumArr = arr.map((item, index) => item = item + 10);

// console.log(sumArr)


// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const strArr = ['Bilal', 'Rajesh', 'Hari', 'One', 'Two'];
// const strArr2 = ['', '', '', '', ''];

// // we want to get only even numbers from the aray [ arr ]

// // filter => Iterate over elements and you can put condition for each element and it will return new array

// const even = arr.filter((item, index) => item % 2 !== 0);
// console.log(even);
// const str = strArr.filter((item, index) =>
//     item === 'Hari'
// );
// console.log(str);

// // every => Iterate over array and check condition and if all items(elements) statisfy condition it will return true
// console.log(strArr.every((item) => item.length > 0));


// // some => Iterate over array and check condition and if atleast one items(elements) statisfy condition it will return true 
// console.log(strArr2.some((item) => item.length > 0));

// reduce => It will iterate, It will return single value, it will not manipulate ur original array

const rdArr = [15.5, 2.7, 4.5, 10, 14, 16];

const sum = rdArr.reduce((prev, curr, index) => prev -= curr
)
const sum2 = rdArr.reduceRight((prev, curr, index) => prev -= curr
)

console.log(sum2);
console.log(sum);

// console.log(rdArr.keys())

/// Find => it will return first matching condition value
console.log(rdArr.find(item => item % 2 === 0)) // 10

/// FindIndex => it will return index of first matching condition element
console.log(rdArr.findIndex(item => item.length > 100)) // index of 10

