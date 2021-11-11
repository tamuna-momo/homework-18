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

const slideArea = document.querySelector('.slide-area');
// const dots = document.querySelectorAll('.dots span');
// dots.forEach((dot) => {
//   dot.addEventListener('click', e => {
//     const index = e.target.getAttribute('data-index');
//     activeIndex = Number(index);
//     dots.forEach((dot) => {
//       dot.classList.remove('active');
//     });
//     e.target.classList.add('active');
//     renderSlider();
//   })
// });
//
// slideArea.addEventListener('mouseenter', e => {
//   // console.log('mouseenter')
//   stopAutoSliding()
// });
//
// slideArea.addEventListener('mouseleave', e => {
//   // console.log('mouseleave')
//   startAutoSliding();
// });

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
const slideArea = document.querySelector('.slide-area');
const dots = document.querySelectorAll('.dots span');
dots.forEach((dot) => {
  dot.addEventListener('click', e => {
    const index = e.target.getAttribute('data-index');
    activeIndex = Number(index);
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    e.target.classList.add('active');
    renderSlider();
  })
});

slideArea.addEventListener('mouseenter', e => {
  // console.log('mouseenter')
  stopAutoSliding()
});

slideArea.addEventListener('mouseleave', e => {
  // console.log('mouseleave')
  startAutoSliding();
});