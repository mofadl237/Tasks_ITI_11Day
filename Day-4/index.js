//1- Selector
const username = document.getElementById("username");
const examName = document.getElementById("examName");
const duration = document.getElementById("duration");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const restart = document.getElementById("restart");

const questionTitle = document.querySelector(".question");
const answerContainer = document.querySelector(".answer");
const exam = document.querySelector(".exam");
const score = document.querySelector(".score");
const timer = document.querySelector(".timer");
const myDegree = document.getElementById("my-degree");
const maxDegree = document.getElementById("max-degree");
let choseElement;
let currentIndexQuestion = 0;
let degree = 0;
let correctAnswer = 0;
let chosenIndex = null;
let confirmed;
let timerAnimation;
//2- get data from json File

async function getExamData() {
  const response = await fetch("data.json");
  return await response.json();
}
const data = await getExamData();
// 3- Add Head Value && Check Data
let timePerQuestion = (data.duration * 60) / data.questions.length;
let timeOfQuestion = timePerQuestion;
// console.log("----", data);
username.innerText = data.userName;
examName.innerText = data.examName;
duration.innerText = data.duration;
showData();
chosenFunction();
// 4- Function
function createChoice(arr) {
  answerContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const choice = document.createElement("h5");
    choice.textContent = arr[i];
    answerContainer.appendChild(choice);
  }
  choseElement = document.querySelectorAll(".answer h5");
}

// 1- createElement Function To Append Chose
function showData() {
  startAnimation();
  questionTitle.innerText = data.questions[currentIndexQuestion].question;
  createChoice(data.questions[currentIndexQuestion].answers);
}
const checkAnswer = () => {
  if (data.questions[currentIndexQuestion].correctIndex == chosenIndex) {
    correctAnswer++;
    degree += data.questions[currentIndexQuestion].degree;
    return true;
  }
  return false;
};



function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes}:${remainingSeconds}`;
}
timer.innerText = formatTime(timeOfQuestion);

function animationFunction() {
  timeOfQuestion--;
  if (timeOfQuestion == 0) {
    // clearInterval(timerAnimation);
    chosenIndex = -1;
    nextQuestion();
  }
  timer.innerText = formatTime(timeOfQuestion);
}
function startAnimation() {
  clearAnimation();

  timeOfQuestion = timePerQuestion;
  timer.innerText = formatTime(timeOfQuestion);

  timerAnimation = setInterval(animationFunction, 1000);
}
function clearAnimation() {
  clearInterval(timerAnimation);
  timer.innerText = formatTime(timePerQuestion);
}

const nextQuestion = () => {
  if (chosenIndex == null) {
    return alert("Please choose answer");
  }
  checkAnswer();

  currentIndexQuestion++;

  if (currentIndexQuestion >= data.questions.length) {
  confirmed = confirm("Are You Sure ?");

  if (confirmed) {
    return closeExam();
  } else {
    currentIndexQuestion--;
    return;
  }
}
  showData();
  chosenFunction();
};
function chosenFunction() {
  chosenIndex = null;
  choseElement.forEach((e, i) => {
    e.addEventListener("click", () => {
      choseElement.forEach((ele) => {
        ele.classList.remove("chosen");
      });
      e.classList.add("chosen");
      chosenIndex = i;
    });
  });
}
function closeExam() {
  exam.style.cssText = "display:none";
  score.style.cssText = "display:block";
  // Add Data For Result
  myDegree.textContent=degree;
  maxDegree.textContent=data.maxDegree;
}
function openExam() {
  exam.style.cssText = "display:block";
  score.style.cssText = "display:none";
}
// 2- Event Click For Next Button To

nextBtn.addEventListener("click", nextQuestion);
resetBtn.addEventListener("click", () => {
  chosenIndex = null;
  choseElement.forEach((ele) => {
    ele.classList.remove("chosen");
  });
});
restart.addEventListener("click", () => {
  currentIndexQuestion = 0;
  degree = 0;
  correctAnswer = 0;
  chosenIndex = null;
confirmed=false;
  openExam();
  showData();
  chosenFunction();
  // window.location.reload();
});
