document.addEventListener("DOMContentLoaded", function () {
  const campoDatos = document.getElementById("data");
  campoDatos.innerHTML = localStorage.getItem("Datos");
});
