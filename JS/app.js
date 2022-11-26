const testBox = document.querySelector(".test-box-div");
const testStartButton = document.querySelector(".test-box-div h1");

function reactionTestStart() {
  testBox.classList.add("start-background-color");
  testStartButton.remove();
}

testStartButton.addEventListener("click", reactionTestStart);
