const sliderImgArray = [
  "./assets/banner1.jpg",
  "./assets/banner2.jpg",
  "./assets/banner3.jpg",
];

console.log(sliderImgArray);

let position = 0;

let sliderImg = document.querySelector(".slider-img");
let sliderImgLeft = document.querySelector("#arrow-left");
let sliderImgRight = document.querySelector("#arrow-right");

sliderImg.style.backgroundImage = `url(" ${sliderImgArray[position]}")`;

sliderImgLeft.addEventListener("click", () => {
  if (position == 0) {
    position = sliderImgArray.length - 1;
  } else {
    position--;
  }
  sliderImg.style.backgroundImage = `url(" ${sliderImgArray[position]}")`;
});
sliderImgRight.addEventListener("click", () => {
  if (position == sliderImgArray.length - 1) {
    position = 0;
  } else {
    position++;
  }
  sliderImg.style.backgroundImage = `url(" ${sliderImgArray[position]}")`;
});
console.log(sliderImgArray.length);
