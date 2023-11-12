let cantidad = document.querySelector('#cantidad');
let precioInicial = document.querySelector('#precioInicial');
let total = document.querySelector('#total');
let menos = document.querySelector('#menos');
let mas = document.querySelector('#mas');

menos.onclick = function () {
  cantidad.innerHTML-- ;
  total.innerHTML = (
    cantidad.innerHTML * precioInicial.innerHTML
  ).toLocaleString();
};

mas.onclick = function () {
    cantidad.innerHTML++;
    total.innerHTML = (
      cantidad.innerHTML * precioInicial.innerHTML
    ).toLocaleString();
  };

  