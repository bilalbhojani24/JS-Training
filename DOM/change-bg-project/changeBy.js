const mybody = document.getElementById("mybody");
const changeBg = document.getElementById("changeBg");

// method 1
changeBg.addEventListener("click", () => {
  const colorCode = parseInt(Math.random() * 1000000);
  mybody.style.backgroundColor = "#" + colorCode;
});

// changeBg.addEventListener("click", function () {
//   const colorCode = parseInt(Math.random() * 1000000);
//   mybody.style.backgroundColor = "#" + colorCode;
// });

// method 2

// changeBg.addEventListener("click", handleChangeBackgroundColor);

// function handleChangeBackgroundColor() {
//   const colorCode = parseInt(Math.random() * 1000000);
//   mybody.style.backgroundColor = "#" + colorCode;
// }
