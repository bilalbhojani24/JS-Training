// function declaration (ES5)
// function add(a, b, c) {
//     console.log(arguments.length);
//     console.log('The addition is : ', a + b + c);
// }
// // function call
// add(1, 2, 4); // 3
// add(10, 23, 100); // 33

// function noParams() {
//     console.log('I am ascent');
// }
// noParams();

// const substract = (a, b, c) => {
//     console.log(a - b - c);
// }
// substract(1, 2, 3);

// const noParamsWithArrowSyntax = () => {
//     console.log('I am arrow function with no params');
// }
// noParamsWithArrowSyntax();

const add = (a, b) => {
    console.log("I am before return");
    return (a + b) + 'RajeshHari' + 18;
    console.log("I am after return");
}

const returnedValued = add(10, 20);
console.log(returnedValued);

const getName = () => {
    const name = {
        name: 'Rajesh and Hari',
        role : 'Developers'
    }
    return name;
}
console.log(getName());


// NOTE : If you using default parameters you should always keep it at last