// scroll elements
const hiddenElements = document.querySelectorAll(".elementUpDown")
const elementLeftToRight = document.querySelectorAll(".elementLeftToRight")
const elementRightToLeft = document.querySelectorAll(".elementRightToLeft")
window.addEventListener("scroll", function () {
  // mengambil ukuran tinggi layar
  var tinggiLayar = window.innerHeight;
  // menentukan ukuran scroll untuk tiap elemen
  var ukuranScroll = 150;

  // =========== perulangan untuk element up down =================
  for (let i = 0; i < hiddenElements.length; i++) {
    // menangkap ukuran elemen dan posisinya relatif terhadap viewport
    let jarakAtasElement = hiddenElements[i].getBoundingClientRect().top;
    // berikan pengkondisian
    if (jarakAtasElement < tinggiLayar - ukuranScroll) {
      hiddenElements[i].classList.add("slide")
    } else {
      hiddenElements[i].classList.remove("slide")
    }
  }

  // =========== perulangan untuk element Left To Right =================
  for (let i = 0; i < elementLeftToRight.length; i++) {
    let jarakAtasElement = elementLeftToRight[i].getBoundingClientRect().top;

    if (jarakAtasElement < tinggiLayar - ukuranScroll) {
      elementLeftToRight[i].classList.add("leftToRight")
    } else {
      elementLeftToRight[i].classList.remove("leftToRight")
    }
  }
})

const bijiKopi = document.querySelectorAll(".kopi");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  bijiKopi.forEach(kopiElement => {
    const speed = kopiElement.getAttribute('data-speed');
    const translateY = scrollY * speed;
    kopiElement.style.transform = `translateY(${translateY}px)`
  })
})