let nombFormu = document.querySelector("#nombre");
let mailFormu = document.querySelector("#correo");

//Formulario
nombFormu.addEventListener("input", function () {
   
  if (nombFormu.value === "") {
    Swal.fire({
        title: 'Ingrese su Apellido y Nombre por favor',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
  }
});

mailFormu.addEventListener("input", function () {
   
  if (mailFormu.value === "") {
    Swal.fire('Ingrese un email valido por favor.')
  }
});

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".datos");

//Muestra en el DOM
const mostrarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML = `
  <div class="alert alert-warning" role="alert">
<h3> Bienvenido ${nombFormu.value}. Nos contactaremos a ${mailFormu.value} en los proximos días. Muchas gracias. </h3></div>`;
});


localStorage.setItem("ocupacion","disponible");
let disponibilidad = localStorage.getItem("ocupacion");

