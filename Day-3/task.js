// Task 1 Open New Page And Scrolled End Close This Window
// 1- get document element
const buttonScrolled = document.getElementById("page1");
const buttonCutText = document.getElementById("page2");
let scrolledPage;
// 2- Function For Tasks
function OpenPage(pageUrl) {
  return open(pageUrl, "", "width=500,height=300");
}
function scrolledToEnd() {
  if (scrolledPage.scrollY >= scrolledPage.innerHeight + 10) {
    // Self-Stopping Interval
    clearInterval(scrolledInterval);
    scrolledPage.close();
  } else scrolledPage.scrollBy(0, 100);
}
function OpenPageScrolled() {
  // globalScope
  scrolledPage = OpenPage("./childScroll.html");
  scrolledInterval = setInterval(scrolledToEnd, 300);
}

// 3- Events And Console

buttonScrolled.addEventListener("click", OpenPageScrolled);

// Task 2 open new page and print char by char end to close page

// 1 getElement

let animationHead;

const textShow = [
  "Mohamed Eldesokey Fadl",
  "Frontend Developer",
  "DevOps Engineer",
  "Cloud Engineer",
];
// 2 Functions in this task

function printChar(element, word) {
  let current = 0;
   clearCutWord = setInterval(() => {
    if(current === word.length)
        CloseCutPage();
    current++;
    element.innerHTML = word.substr(0, current);
  }, 300);
}

function CloseCutPage(){
    clearInterval(clearCutWord);
    cutPage.close();
}
function OpenPageCut() {
  // globalScope

  cutPage = OpenPage("./childCut.html");
  cutPage.onload = () => {
    animationHead = cutPage.document.getElementById("animationHead");
printChar(animationHead,textShow[0])
 
  };
}

buttonCutText.addEventListener("click", OpenPageCut);
// 3 task ope new page and git data from parent