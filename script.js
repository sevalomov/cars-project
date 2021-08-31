//$(document).ready(function() {
//$('.search-box').focus();
//});

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const backCar = document.querySelector(".back-car");
const modelCar = document.querySelector(".model-car");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("header-shadow")
  } else {
    header.classList.remove("header-shadow");
  }
}


const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
});

const jobCards = document.querySelectorAll(".job-card");
const jobDetailTitle = document.querySelector(
 ".job-explain-content .job-card-title"
);

backCar.addEventListener("click", () => {
 wrapper.classList.remove("detail-page");
 wrapper.classList.remove("model-active");
});

modelCar.addEventListener("click", () => {
 wrapper.classList.add("model-active");
 wrapper.classList.remove("detail-page");
});






const jobBg = document.querySelector(".job-bg");
jobCards.forEach((jobCard) => {
 jobCard.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 5);

  const url = `https://image-server.autospot.ru/images/1/0/2/2/4/6/461490/origin/461490.webp`;
  jobBg.src = url;


const src_img = jobCard.querySelector(".overview-wrapper-img");
if(src_img !== null){
console.log(src_img.src);
 jobBg.src = src_img.src;
}



  const title = jobCard.querySelector(".job-card-title");
  jobDetailTitle.textContent = title.textContent;
  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;
 });
});







$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})