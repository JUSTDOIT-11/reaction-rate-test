const testBox = document.querySelector(".test-box-div"); //컬러박스
const testStartButton = document.querySelector(".test-box-div h1"); //컬러박스 안에 h1

//테스트 대기상태로 돌아가는 함수
function reZero() {
  testBox.classList.remove("green");
  reactionTestStart();
}

//랜덤한 시간에 박스 색상을 바꾸는 함수
function changeColor() {
  testBox.classList.remove("start-background-color");
  testBox.classList.add("green");
}

//테스트 스타트 함수
function reactionTestStart() {
  testBox.classList.add("start-background-color"); //시작하고 대기상태일때 testBox 색깔
  testStartButton.remove(); //시작문구 삭제
  setTimeout(changeColor, Math.floor(Math.random() * 5000) + 2000); //2~6초 이내의 랜덤한 시간 내에 changeColor함수 실행
}

testStartButton.addEventListener("click", reactionTestStart);
testBox.addEventListener("click", reZero);
