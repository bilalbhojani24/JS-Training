// alert("I am alert!");
// confirm("Are you sure??");
// prompt("Enter the name");

// Scope (Block scope, local scope and global scope)

// Block scope

const a = 100; // Global scope
const b = 120; // Global scope

{
  const d = 10; // const has block scope
  let e = 10; // let has block scope
  var f = 10; // we can access var variable outside block as well
  console.log(d, e, f);
  console.log("Hi I am JS block!!");
}
console.log(f);
console.log("Addition is : ", a + 5);

function add() {
  const d = 10; // const has local scope
  let e = 10; // let has local scope
  var f = 10; // we can access var variable outside funcation
  console.log(d, e, f);
}
add();
