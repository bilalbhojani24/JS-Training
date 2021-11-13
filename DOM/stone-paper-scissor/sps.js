const execute = (e) => {
  const userScore = document.querySelector("#userScore");
  const computerScore = document.querySelector("#computerScore");
  const result = document.getElementById("result");

  const userInput = e.id;
  const computerInput = parseInt(Math.random() * 10);
  // 0-2 => rock
  // 3 - 6 => paper
  // 7 - 9 => scissor
  result.textContent = "Loading...";
  setTimeout(() => {
    if (userInput === "rock") {
      if (computerInput >= 0 && computerInput <= 2) {
        result.textContent = "Session Tied!!";
      } else if (computerInput >= 3 && computerInput <= 6) {
        const oldScore = parseInt(computerScore.textContent);
        computerScore.textContent = oldScore + 1;
        result.textContent = "Oops! Computer won..";
      } else {
        const oldScore = parseInt(userScore.textContent);
        userScore.textContent = oldScore + 1;
        result.textContent = "Damn!! You won..";
      }
    }
    //scissor
    //paper
  }, 1000);
};

// switch (rock / paper / scissor) {
//   case rock:
//     rock();
//     break;
//   case scissor:
//     scissor();
//     break;
// }
