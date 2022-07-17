//consulta sobre la categoria del titulo celular
fetch(
  "https://api.mercadolibre.com/sites/MLA/domain_discovery/search?q=$celular samsung"
)
  .then((resp) => resp.json())
  .then((data) => console.log(data));

//consulta sobre una categoria en especifica con el ID

fetch("https://api.mercadolibre.com/categories/MLA1055")
  .then((resp) => resp.json())
  .then((data) => console.log(data));

//Buscar productos por nombre y guardar los id en un array

let producutosML = [];
let productosPicture = [];
let productosUrlML = [];

fetch(
  "https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Xiaomi Note 10"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    producutosML = data.results;
    console.log(producutosML);
    producutosML.forEach((el) => {
      productosPicture.push(el.pictures);
    });
    console.log(productosPicture[0]);
    productosPicture.forEach((el) => {
      el.forEach((el) => {
        productosUrlML.push(el.url);
      });
    });
    console.log(productosUrlML);
  });

// buscar productos especificos con id
fetch(`https://api.mercadolibre.com/items/MLA1109741535`)
  .then((resp) => resp.json())
  .then((data) => console.log(data));

console.log(productosUrlML);
