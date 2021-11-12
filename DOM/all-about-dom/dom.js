// // Selectors in DOM

// // getElementById
// console.log(document.getElementById("main"));
// document.getElementById("main").style.color = "red";
// const html = "<h1>Hello World</h1><p>Second Line</p>";
// // const html = "Hello World. I am second line";
// // document.getElementById("main").innerHTML = html;
// document.getElementById("main").innerText = html;
// console.log(document.getElementById("main"));

// // getElementByClassName
// console.log(document.getElementsByClassName("list-group-item"));
// for (
//   i = 0;
//   i < document.getElementsByClassName("list-group-item").length;
//   i++
// ) {
//   document.getElementsByClassName("list-group-item")[i].style.color = "red";

//   document.getElementsByClassName("list-group-item")[i].textContent =
//     "I am new text!!";
// }

// // getElementByTagName
// console.log(document.getElementsByTagName("li"));
// for (i = 0; i < document.getElementsByTagName("li").length; i++) {
//   document.getElementsByTagName("li")[i].style.color = "purple";
// }

// // querySelector => first match element
// console.log(document.querySelector("#main"));
// console.log(document.querySelector(".list-group-item"));

// // queryAllSelector => all elements will be returned(for class and not for ID)
// console.log(document.querySelectorAll("#main"));
// console.log(document.querySelectorAll(".list-group-item"));

// Traversing
// 1. Parents => Who is my parent element
const listGroup = document.querySelector("#list-group");
console.log(listGroup.parentNode);
console.log(listGroup.parentElement); // important

// 2 children
const main = document.querySelector("#main");
console.log(main.childNodes);
console.log(main.children); // important

console.log(main.firstChild);
console.log(main.firstElementChild); // important

console.log(main.lastChild);
main.lastChild.style.color = "red"; // uncommnet and check
console.log(main.lastElementChild); // important
main.lastElementChild.style.color = "red";

// 3. siblings
const main = document.querySelector("#list-group");
console.log(main.nextSibling); // useless
console.log(main.nextElementSibling); // important

console.log(main.previousSibling); // useless
console.log(main.previousElementSibling); // important

// 4. create elements
const main = document.querySelector("#list-group");
const li = document.createElement("li"); // copy created
// li.className = "list-group-item";
li.textContent = "I am new created element!!";
li.setAttribute("class", "list-group-item");
li.setAttribute("id", "list-group-item-id");
main.appendChild(li); // copy used and inserted into DOM

// setAttribute
const a_tag = document.createElement("a");
a_tag.textContent = "click me";
a_tag.setAttribute("href", "https://wwww.google.com");
a_tag.setAttribute("style", "color : red; font-size : 32px");
main.appendChild(a_tag);

// classList
console.log(main.classList);
