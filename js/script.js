const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  };
})


const hamburgerMenu = document.querySelector(".hamburger_menu");
const navLink = document.querySelector(".nav_link ul")
hamburgerMenu.addEventListener("click", function() {
  navLink.classList.toggle('active')
}) 


$(function () {
  $('.menu_product_o_t_d').eq(0).addClass('active');
  var total = $('.menu_product_o_t_d').length;
  var current = 0;
  $('.move_left').on('click', function () {
    var next = current;
    current = current + 1;
    setSlide(next, current);
  });
  $('.move_right').on('click', function () {
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }
    $('.menu_product_o_t_d').eq(prev).removeClass('active');
    $('.menu_product_o_t_d').eq(slide).addClass('active');
    setTimeout(function () {

    }, 800);
  }
});