// 1.
// function showTime(){
//     let date = new Date();
//     let h = date.getHours(); // 0 - 23
//     let m = date.getMinutes(); // 0 - 59
//     let s = date.getSeconds(); // 0 - 59
//     let session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("ClockDisplay").innerText = time;
//     document.getElementById("ClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();

// 2.
const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
  }

  renderSlider();
}

function prevSlide() {
  if(activeIndex === 0){
    activeIndex = slidesLength - 1;
  } else {
    activeIndex = activeIndex - 1;
  }

  renderSlider();
}

nextButton.addEventListener('click', (e) => {
  nextSlide();
});
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  if(e.code === 'ArrowRight'){
    nextSlide();
  }
  if(e.code === 'ArrowLeft'){
    prevSlide();
  }
});

let intervalId = null;

function startAutoSliding() {
  if(!intervalId){
    intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
  }
}

function stopAutoSliding() {
  clearInterval(intervalId);
  intervalId = null;
}
stopBtn.addEventListener('click', stopAutoSliding);
startBtn.addEventListener('click', startAutoSliding);

document.getElementById("slider").onmouseenter = function() {mouseEnter()};
document.getElementById("slider").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
    document.getElementById("slider")
    clearInterval(intervalId);
    intervalId = null;
    
}

function mouseLeave() {
    if(!intervalId){
        document.getElementById("slider")
        intervalId = setInterval(() => {
          nextSlide();
        }, 3000);
      }
}

// 3.
var slidePosition = 1;
SlideShow(slidePosition);


function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("slide-box");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 