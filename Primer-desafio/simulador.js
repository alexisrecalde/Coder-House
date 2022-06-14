function SeleccionarBanco() {
  alert("Seleccione el banco en el cual desea pedir el prestamo");
  let banco = Number(
    prompt("1) Banco Provincia 2) Banco Nacion 3) Banco Galicia")
  );
  let cantidad = Number(prompt("ingrese monto deseado"));

  console.log(banco);
  console.log(cantidad);

  if (banco === 1) {
    let prestamo1 = cantidad * 1.35;
    alert(`la cantidad a devolver al banco ${banco} es de ${prestamo1}`);
  } else if (banco === 2) {
    let prestamo2 = cantidad * 1.4;
    alert(`la cantidad a devolver al banco ${banco} es de ${prestamo2}`);
  } else if (banco === 3) {
    let prestamo3 = cantidad * 1.8;
    alert(`la cantidad a devolver al banco ${banco} es de ${prestamo3}`);
  } else {
    alert(
      "no ingresaste ningun banco valido, ingresa 1, 2 o 3 para seleccionar alguno"
    );
  }
}

SeleccionarBanco();
