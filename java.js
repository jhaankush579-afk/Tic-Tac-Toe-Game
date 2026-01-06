let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.getElementById("msg");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let game = document.querySelector(".game");

let winPatterns = [
  [0 , 1 , 2],
  [0 , 4 , 8],
  [0 , 3 , 6],
  [1 , 4 , 7],
  [2 , 5 , 8],
  [2 , 4 , 6],
  [3 , 4 , 5],
  [6 , 7 , 8]
]

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click" , () => {
    if(turn0) {
      box.innerHTML = "O";
      turn0 = false;
      box.disabled = true;
    }
    else {
      box.innerHTML = "X";
      turn0 = true;
      box.disabled = true;
    }
    checkWinner();
  })
})
const btnDisabled = () => {
  for (box of boxes) {
    box.disabled = true;
  }
}
const showResult = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerHTML = `<b>Congratulations! Player ${winner} is Winner</b>`;
}

const checkWinner = () => {
  for(let pattern of winPatterns) {
    let post1 = boxes[pattern[0]].innerHTML;
    let post2 = boxes[pattern[1]].innerHTML;
    let post3 = boxes[pattern[2]].innerHTML;
    if(post1 != "" && post2 != "" && post3 != "") {
      if(post1 === post2 && post2 === post3) {
        resetBtn.classList.add("hide");
        game.classList.add("hide");
        btnDisabled();
        showResult(post1);
      }
    }
  }
}

resetBtn.addEventListener("click" , () => {
  for(box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
  }
})

newBtn.addEventListener("click" , () => {
  for(box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
  }
  msgContainer.classList.add("hide");
  resetBtn.classList.remove("hide");
  game.classList.remove("hide");
})