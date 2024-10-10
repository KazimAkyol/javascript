//! Selector

const selectionArticle = document.querySelector(".selection");

//! Secilen Elemanlarin Tasiyicilari

const yourChoiseDiv = document.getElementById("your-choise");
const pcChoiesDiv = document.getElementById("pc-choise");

//! Variables

let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");

//! Event Listeners

selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);

  userSelectImg.src = "./assets/rock.png";
  userSelectImg.alt = "rock";
  yourChoiseDiv.appendChild(userSelectImg);
});

//! Functions

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
