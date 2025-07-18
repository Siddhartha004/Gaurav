// js/slider.js
const images = ["images/slider1.jpg", "images/slider2.jpg", "images/slider3.jpg"];
let current = 0;

function changeSlide() {
  const img = document.getElementById("slider-image");
  current = (current + 1) % images.length;
  img.src = images[current];
}

setInterval(changeSlide, 3000);
