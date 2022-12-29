const homeBtn = document.querySelector(".top-middle-bar span"); //reload를 위해
const testBox = document.querySelector(".test-box-div"); //컬러박스
const Hbox = document.querySelector(".test-box-h3"); //h3묶음 박스
const notice = testBox.querySelector(".notice-top"); //안내문구 1
const noticeResult = testBox.querySelector(".notice-bot"); //안내문구 2
const testStartButton = document.querySelector(".start-btn"); //컬러박스 안에 시작
const testResult = document.querySelector(".test-result"); // 결과값 박스 div
const testResultAve = document.querySelector(".test-result-average span"); // 결과값 평균 span
const reStartBtn = document.querySelector(".re-start-btn"); //재시작 버튼

//초기화
let start = 0,
  end = 0,
  count = 0,
  reactTimeSum = 0;

//홈 / 새로고침
function reLoad() {
  window.location.reload();
}

homeBtn.addEventListener("click", reLoad);

//테스트 끝 세팅
function testEnd() {
  testBox.classList.remove("green", "pointer");
  testBox.classList.add("end-background-color");
  Hbox.classList.add("noticeEndMargin");
  noticeResult.classList.remove("invisible");
  reStartBtn.classList.remove("invisible");
  notice.innerText = "테스트 종료";
  noticeResult.innerText = `평균값: ${Math.round(reactTimeSum / count)}ms`;
}

//반응속도 측정, 표현 함수
function reactionTime() {
  count = count + 1; //테스트 횟수 카운트
  let reactTime = end - start; //걸린시간 ms
  reactTimeSum += reactTime; //걸린시간의 합
  const resultBoxSpan = document.createElement("span");
  testResult.appendChild(resultBoxSpan);
  resultBoxSpan.innerText = `${count}회차 : ${reactTime}ms`;
}

//테스트 대기상태로 돌아가는 함수
function reZero() {
  if (count < 4) {
    testBox.classList.remove("green", "pointer");
    testBox.classList.add("start-background-color");
    end = new Date(); //끝 카운트
    reactionTime();
    randomSecond();
  } else if (count >= 4 && count < 5) {
    end = new Date(); //끝 카운트
    reactionTime();
    testEnd();
  } else {
    return;
  }
}

//박스 색상을 바꾸는 함수
function changeColor() {
  testBox.classList.remove("start-background-color", "disabled");
  testBox.classList.add("green", "pointer");
  start = new Date(); //시작 카운트
}

//랜덤한 초에 changeColor 함수를 실행시키는 함수
function randomSecond() {
  const randomSec = Math.floor(Math.random() * 4000) + 1000; //랜덤 초 뽑기
  setTimeout(changeColor, randomSec); //랜덤한 시간에 changeColor함수 실행
  testBox.classList.add("disabled");
}

//테스트 대기상태 함수
function reactionTestStart() {
  testBox.classList.add("start-background-color"); //시작하고 대기상태일때 testBox 색깔
  testBox.classList.remove("disabled");
  testStartButton.remove(); //시작문구 삭제
  notice.classList.remove("noticeMargin"); //마진 삭제
  notice.innerText = "배경화면이 초록색이 되었을 때 클릭하세요.";
  randomSecond();
}

//재시작 세팅 함수
function testReStart() {
  count = reactTimeSum = 0;
  testBox.classList.remove("end-background-color");
  testBox.classList.add("start-background-color", "pointer");
  Hbox.classList.remove("noticeEndMargin");
  reStartBtn.classList.add("invisible");
  noticeResult.classList.add("invisible");
  notice.innerText = "배경화면이 초록색이 되었을 때 클릭하세요.";
  randomSecond();
}

testStartButton.addEventListener("click", reactionTestStart);
testBox.addEventListener("click", reZero);
reStartBtn.addEventListener("click", testReStart);
