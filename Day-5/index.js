let allImages= document.querySelectorAll(".headImagePreview img");
let bodyImage=document.querySelector(".bodyImagePreview img");
function changeImage(event){
bodyImage.src=event.target.src;
}
function resetImage(){
    bodyImage.src='../Images/Book.png';
}
function clickImage(event){
    allImages.forEach((image)=> image.classList.remove('active'));
    event.target.classList.add('active');
    bodyImage.src=event.target.src;
}
allImages.forEach((image)=> image.addEventListener('mouseover', changeImage));
// allImages.forEach((image)=> image.addEventListener('mouseout', resetImage));
allImages.forEach((image)=> image.addEventListener('click', clickImage));