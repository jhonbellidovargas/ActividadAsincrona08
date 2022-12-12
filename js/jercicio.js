
// Funciones:
// capturar datos con jquery
$(document).ready(function () {
  console.log("jquery funcionando");
  $("#btnEnviar").click(function () {
    console.log("click");
    var nombre = $("#txtNombre").val();
    var apellido = $("#txtApellido").val();
    var correo = $("#txtCorreo").val();
    var fecha = $("#txtFecha").val();
    var genero = $("#txtGenero").val();
    alert(
      "Nombre: " +
        nombre +
        " Apellido: " +
        apellido +
        " Correo: " +
        correo +
        " Fecha: " +
        fecha +
        " Genero: " +
        genero
    );
  });
});
