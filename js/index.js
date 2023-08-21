const btnGuardar = document.getElementById("buttonText");
const txbInput = document.getElementById("inputText");
function guardarDatos() {
  var Data = inputText.value;
  localStorage.setItem("Datos", Data);
  console.log(Data);
}
document.addEventListener("DOMContentLoaded", function () {
  btnGuardar.addEventListener("click", guardarDatos);
});
