let slideIndex = 0;

function plusSlides(n) {
  slowSlides((slideIndex += n));
}
function slowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("do");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("do");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

function nextCard() {
  let but = document.getElementsByClassName("card2")[0];
  let but1 = document.getElementsByClassName("card1")[0];
  but.style.display = "block";
  but1.style.display = "none";
}

function nextCard2() {
  let but = document.getElementsByClassName("card2")[0];
  let but1 = document.getElementsByClassName("card1")[0];
  but1.style.display = "block";
  but.style.display = "none";
}
