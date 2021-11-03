//Loops : To execute certain statements multiple times
const tableNumber = 2;

// 1. For loop
// for (statement1; statement2; statement3){
//     statement1 : initialization
//      statement2 :  condition
//      statement3 : increement
// }
for (let i = 1; i <= 10; i++){
    console.log(tableNumber + " * " + i +  " = " + tableNumber*i);
}


// While loop
// while (condition) {
//     // statements
//     // increement
// }
let i = 1;
while (i <= 10) {    
    console.log(tableNumber + " * " + i + " = " + tableNumber * i);
    i++;
}

// do...while loop
// do {
//     // statements
//     // increement
// }
// while(condition)
let j = 1;
do {
    console.log(tableNumber + " * " + j + " = " + tableNumber * j);
    j++;
}
while (j <= 10)

// Note : do-while execute atleast once