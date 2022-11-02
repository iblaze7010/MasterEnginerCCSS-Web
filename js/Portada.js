document.addEventListener("DOMContentLoaded", function () {
  const introText = document.getElementsByClassName("intro__text"),
    introBtn = document.getElementsByClassName("intro__btn");
    introBtn2 = document.getElementsByClassName("intro__btn2");
    introBtn3 = document.getElementsByClassName("intro__btn3");

    introBtn[0].addEventListener("click", () => window.location='#Contacto');
    introBtn3[0].addEventListener("click", () => window.location='https://www.dropbox.com/s/d6x05rwbsd31e2k/BROCHURE%20COMERCIAL.pdf?dl=0');

  
  setTimeout(() => {
    introText[0].classList.add("start");
    introBtn[0].classList.add("start");
    introBtn2[0].classList.add("start");
    introBtn3[0].classList.add("start");
  }, 800);
});
