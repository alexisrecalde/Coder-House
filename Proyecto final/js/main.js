const productos = [
  {
    id: 01,
    nombre: "producto 1",
    precio: 100,
    cantidad: 0,
  },

  {
    id: 02,
    nombre: "producto 2",
    precio: 100,
    cantidad: 0,
  },

  {
    id: 03,
    nombre: "producto 3",
    precio: 100,
    cantidad: 0,
  },

  {
    id: 04,
    nombre: "producto 4",
    precio: 100,
    cantidad: 0,
  },

  {
    id: 05,
    nombre: "producto 5",
    precio: 100,
    cantidad: 0,
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
