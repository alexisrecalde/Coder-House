/*************************PRODUCTOS***************************/

const arrowVisible = document.querySelector(".swiper");
const arrowContainerNext = document.querySelector(".arrow-container-next");
const arrowContainerPrev = document.querySelector(".arrow-container-prev");

const productosContainer = document.querySelector(".swiper-wrapper");

let stock = [];

fetch("../stock.json")
  .then((resp) => resp.json())
  .then((data) => {
    stock = data;

    stock.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("swiper-slide");

      div.innerHTML = `
    
          <img
                  class="productos-card-img"
                   src="${item.img}"
                   alt=""
          />
                <hr />
                 <h3 class="product-text">${item.nombre}</h3>
                 <h3 class="product-text">$${item.precio}</h3>
                 <p class="product-text envio-gratis-text">Envio gratis</p>
                 <p class="product-text product-text-description">
                   Lorem ipsum dolor sit amet consectetur
                 </p>
                 <button onclick="agregarAlCarrito(${item.id})" class="icon-btn add-btn">
                   <div class="add-icon"></div>
                 </button>
     `;
      console.log(div);
      productosContainer.append(div);
    });
  });

//hover de productos(no funciona bien)

// arrowVisible.addEventListener("mouseover", (event) => {
//   event.preventDefault(arrowContainerNext.classList.toggle("arrow-visible"));
//   event.preventDefault(arrowContainerPrev.classList.toggle("arrow-visible"));
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 50,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
