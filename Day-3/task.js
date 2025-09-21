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
// Task 4 Slider Prev Next Start Stop (Set Interval & Disable)
const btns = document.querySelectorAll(".button button");
const img=document.getElementById("img");
let currentImage=2;
const srcImage = [
  "../Images/Book.png",
  "../Images/Boy.png",
  "../Images/Pen.png",
  "../Images/Girl.png"
]
function nextImage(){
  currentImage++;
if(currentImage == srcImage.length) currentImage=0;
img.setAttribute("src",srcImage[currentImage])
}
function prevImage(){
  if(currentImage == 0) currentImage=srcImage.length;
  currentImage--;
img.setAttribute("src",srcImage[currentImage])
}
function startSlider(){
  btns[1].disabled = true;
  sliderInterval = setInterval(function(){
    nextImage();
   
  },500)
}
function endSlider(){
  btns[1].disabled = false;
  clearInterval(sliderInterval);
}
btns[0].addEventListener("click",prevImage);
btns[1].addEventListener("click",startSlider);
btns[2].addEventListener("click",endSlider);
btns[3].addEventListener("click",nextImage);
