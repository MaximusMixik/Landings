let headerBurger = document.querySelectorAll(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let back = document.querySelector("body");

headerBurger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    headerMenu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});


// header scroll
window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    header.classList.add("smaller");
  } else {
    header.classList.remove("smaller");
  }
});
