const productos = [
  {
    id: 01,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris1.jpg",
    cantidad: 0,
  },
  {
    id: 02,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris2.jpg",
    cantidad: 0,
  },
  {
    id: 03,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris3.jpg",
    cantidad: 0,
  },
  {
    id: 04,
    nombre: "Auriculares",
    precio: 10000,
    desc: "Auriculares ",
    img: "./assets/productos/auris4.jpg",
    cantidad: 0,
  },
  {
    id: 05,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular",
    img: "./assets/productos/celular1.jpg",
    cantidad: 0,
  },
  {
    id: 06,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular",
    img: "./assets/productos/celular2.jpg",
    cantidad: 0,
  },
  {
    id: 07,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular",
    img: "./assets/productos/celular3.jpg",
    cantidad: 0,
  },
  {
    id: 08,
    nombre: "Celular",
    precio: 10000,
    desc: "Celular ",
    img: "./assets/productos/celular4.jpg",
    cantidad: 0,
  },
  {
    id: 09,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu ",
    img: "./assets/productos/compu1.jpg",
    cantidad: 0,
  },
  {
    id: 10,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu2",
    img: "./assets/productos/compu2.jpg",
    cantidad: 0,
  },
  {
    id: 11,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu img:",
    img: "./assets/productos/compu3.jpg",
    cantidad: 0,
  },
  {
    id: 12,
    nombre: "Computadora",
    precio: 10000,
    desc: "Compu img:",
    img: "./assets/productos/compu4.jpg",
    cantidad: 0,
  },
];

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

/********************PRODUCTOS**********************/

const productosContainer = document.querySelector(".productos-card-container");

productos.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("productos-card");

  div.innerHTML = `
      
       <img
              class="productos-card-img"
              src="${item.img}"
              alt=""
            />
            <hr />
            <h3 class="product-text">${item.precio}</h3>
            <p class="product-text">Envio gratis</p>
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

/********************CARRITO**********************/
const carrito = [];
const carritoContainer = document.querySelector("#carrito-container");

function agregarAlCarrito(id) {
  let producto = productos.find((prod) => prod.id === id);
  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  //si el producto ya existe en el carrito suma la cantidad, sino lo agrega al array carrito
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(producto);
    producto.cantidad = 1;
  }
  renderCarrito();
  console.log(carrito);
}

function calcularTotal() {
  let total = 0;
  for (const e of carrito) {
    let precioProducto = e.cantidad * e.precio;
    total += precioProducto;
  }
  console.log(total);
}

const renderCarrito = () => {
  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("producto-carrito");

    div.innerHTML = `
         <p>${item.nombre}</p>
            <p>${item.precio}</p>

            <button class="noselect">
              <span class="text">Eliminar</span
              ><span class="icon"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                  ></path>
                </svg>
              </span>
            </button>

     
  `;

    carritoContainer.append(div);
    console.log(div);
  });
};

//boton agregar al carito
const botonAgregarAlCarrito = document.querySelector(".add-btn");
const contadorCarritos = document.querySelector("#contador-carrito");
const precioTotal = document.querySelector("#precio-total");
("");

console.log(botonAgregarAlCarrito, contadorCarritos);

botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito);
