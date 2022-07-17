const inputSearch = document.querySelector(".swiper-slider");

document.addEventListener("keyup", (e) => {
  if (e.target.matches(".input-search")) {
    console.log(e.key);
    document.querySelectorAll(".swiper-slide").forEach((el) => {
      if (el.textContent.toLowerCase().includes(e.target.value)) {
        el.classList.remove("filter");
      } else {
        el.classList.add("filter");
      }
    });
  }
});
