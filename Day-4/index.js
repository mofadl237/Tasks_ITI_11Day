//1- Selector
const username = document.getElementById("username");
const exam = document.getElementById("exam");
const duration = document.getElementById("duration");
const nextBtn = document.getElementById("nextBtn");

const questionTitle = document.querySelector(".question");
const answerContainer = document.querySelector(".answer");
let choseElement;
let currentIndexQuestion = 0;
let degree = 0;
let correctAnswer = 0;
let chosenIndex = null;
let confirmed;
//2- get data from json File

async function getExamData() {
  const response = await fetch("data.json");
  return await response.json();
}
const data = await getExamData();
// 3- Add Head Value && Check Data

// console.log("----", data);
username.innerText = data.userName;
exam.innerText = data.examName;
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
  questionTitle.innerText = data.questions[currentIndexQuestion].question;
  createChoice(data.questions[currentIndexQuestion].answers);
}
const checkAnswer = () => {
  if (data.questions[currentIndexQuestion].correctIndex == chosenIndex) {
    correctAnswer++;
    degree += data.questions[currentIndexQuestion].degree
    return true;
  }
  return false;
};

const nextQuestion = () => {
    if(chosenIndex == null){
        return alert("Please choose answer");
    }
  checkAnswer();
  currentIndexQuestion++;

  if (currentIndexQuestion >= data.questions.length git ) {
    nextBtn.innerText = "Finish";
    confirmed = confirm("Are You Sure ?");
  }
  console.log(confirmed)
  showData();
  chosenFunction();
};
function chosenFunction() {
    chosenIndex=null;
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
// 2- Event Click For Next Button To

nextBtn.addEventListener("click", nextQuestion);
