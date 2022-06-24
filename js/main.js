const productos = [
  {
    id: 01,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris1.jpg",
  },
  {
    id: 02,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris2.jpg",
  },
  {
    id: 03,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris3.jpg",
  },
  {
    id: 04,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris4.jpg",
  },
  {
    id: 05,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular",
    img: "./assets/productos/celular1.jpg",
  },
  {
    id: 06,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular",
    img: "./assets/productos/celular2.jpg",
  },
  {
    id: 07,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular",
    img: "./assets/productos/celular3.jpg",
  },
  {
    id: 08,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular ",
    img: "./assets/productos/celular4.jpg",
  },
  {
    id: 09,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu ",
    img: "./assets/productos/compu1.jpg",
  },
  {
    id: 10,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu2",
    img: "./assets/productos/compu2.jpg",
  },
  {
    id: 11,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu img:",
    img: "./assets/productos/compu3.jpg",
  },
  {
    id: 12,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu img:",
    img: "./assets/productos/compu4.jpg",
  },
];
//prueba de recorrido
for (const e of productos) {
  console.log(e);
}
const carrito = [];

function agregarAlCarrito(id) {
  let producto = productos.find((producto) => producto.id == id);

  let productoEnCarrito = carrito.find((producto) => producto.id == id);

  console.log(producto);
  console.log(productoEnCarrito);

  //si el producto ya existe en el carrito suma la cantidad, sino lo agrega al array carrito
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(producto);
    producto.cantidad = 1;
  }
}

agregarAlCarrito(01);
agregarAlCarrito(01);
agregarAlCarrito(02);
agregarAlCarrito(01);
agregarAlCarrito(03);
agregarAlCarrito(03);
console.log(carrito);

function calcularTotal() {
  let total = 0;
  for (const e of carrito) {
    let precioProducto = e.cantidad * e.precio;
    total += precioProducto;
  }
  console.log(total);
}

calcularTotal();

function EliminarProducto(id) {
  carrito[id].cantidad--;
  console.log(carrito[id].cantidad);
}
EliminarProducto(00);
EliminarProducto(00);
EliminarProducto(00);
calcularTotal();
/********************SLIDER**********************/

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

/********************MODAL**********************/

const modalContainer = document.querySelector(".modal-container");
const openModal = document.getElementById("open-modal");
const closeModal = document.querySelector("#close-modal");

openModal.addEventListener("click", (event) => {
  event.preventDefault(modalContainer.classList.toggle("modal-visible"));
});

closeModal.addEventListener("click", () => {
  modalContainer.classList.toggle("modal-visible");
});

modalContainer.addEventListener("click", () => {
  closeModal.click();
});

/********************PRODUCTOS**********************/

const productosContainer = document.querySelector(".productos-card-container");

productos.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("productos-card");

  div.innerHTML = `
      
         <img src=${item.img} alt="" />
          <hr />
          <h3 class="product-text">${item.precio}</h3>
          <p class="product-text">Envio gratis</p>
          <p class="product-text product-text-description">
            Lorem ipsum dolor sit amet consectetur
          </p>
`;
  console.log(div);
  productosContainer.append(div);
});
