//! Selector

const selectionArticle = document.querySelector(".selection");

//! Secilen Elemanlarin Tasiyicilari

const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//! Message

const messagePar = document.querySelector(".message");

//! Score Card

const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById(".pc-score");
const yourScoreSpan = document.getElementById(".your-score");
const domTopScore = document.getElementById("top-score");

//! Modal

const modalCardSelector = 

//! Variables

let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
let pcArr;
let pcRandom;

//! Colors

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//! Event Listeners

selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);

  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

//! Functions

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `/assets/${pcRandom}.png`;
  pcSelectImg.alt = "rock";
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  // console.log("user",userSelectImg.alt)
  // console.log("pc",pcSelectImg.alt)

  // Esitlik Durumu:
  if (userSelectImg.alt == pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "It's a draw";
  scoreCardSection.style.colors = YELLOW;
  messagePar.style.backgroundColors = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColors = RED;
  pcScoreSpan.textContent++;
};

const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgroundColors = GREEN;
  yourScoreSpan.textContent++;
};

//! Ilkel Yöntemler
// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");

// rockImg.addEventListener("click", () => {
//     userSelectImg.src = "./assets/rock.png";
//     userSelectImg.alt = "rock";
//     yourChoiseDiv.appendChild(userSelectImg);

//     //innerHTML
//     //yourChoiseDiv.innerHTML = `<img src = "./assets/rock.png">`
//   });

//   paperImg.addEventListener("click", () => {
//     userSelectImg.src = "./assets/paper.png";
//     userSelectImg.alt = "paper";
//     yourChoiseDiv.appendChild(userSelectImg);
//   });

//   scissorImg.addEventListener("click", () => {
//     userSelectImg.src = "./assets/scissor.png";
//     userSelectImg.alt = "scissor";
//     yourChoiseDiv.appendChild(userSelectImg);
//   });
