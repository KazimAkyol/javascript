//! Selector

const selectionArticle = document.querySelector(".selection");

//! Secilen Elemanlarin Tasiyicilari

const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//! Variables

let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");

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
  pcSelectImg.src = `/assets/scissor.png`;
  pcSelectImg.alt = "rock";
  pcChoiceDiv.appendChild(pcSelectImg);
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
