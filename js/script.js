const billeder = document.querySelectorAll(".billede-valgt a");
const imgBtns = [...billeder];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  console.log(imgItem);
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    skiftbillede();
  });
});

function skiftbillede() {
  const displayWidth = document.querySelector(".fremvisning img:first-child")
    .clientWidth;

  document.querySelector(".fremvisning").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", skiftbillede);
