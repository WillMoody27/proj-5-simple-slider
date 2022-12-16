const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Setup Slide Control
// **** Eventlisteners ****
let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  // invoke carousel
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  // invoke carousel
  carousel();
});

// **** Functions ****
function carousel() {
  //   //   working with slides #1
  //   //   From last to start
  //   if (counter == slides.length) {
  //     counter = 0;
  //   }
  //   //   From start to last
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// working with slides #2
prevBtn.style.display = "none";
