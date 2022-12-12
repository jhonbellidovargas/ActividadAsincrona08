// Funciones:
function validarIconos(id, isValid) {
  let icono = $(id).children();
  if (isValid) {
    icono.addClass("fa-check text-success");
    icono.removeClass("fa-times text-danger");
  } else {
    icono.addClass("fa-times text-danger");
    icono.removeClass("fa-check text-success");
  }
}

function validarUsuario() {
  $("#usuarioCheck").removeClass("d-none");
  let usuario = $("#txtUsuario").val();
  let expRegUsuario = new RegExp("^[a-zA-Z0-9_]{4,16}$");
  if (expRegUsuario.test(usuario)) {
    $("#errorUsuario").html("");
    validarIconos("#usuarioCheck", true);
    return true;
  } else {
    $("#errorUsuario").html(
      "El usuario tiene que ser de 4 a 16 dígitos y  solo puede contener numeros, letras y guion bajo"
    );
    validarIconos("#usuarioCheck", false);
    return false;
  }
}

function validarNombre() {
  $("#nombreCheck").removeClass("d-none");
  let nombre = $("#txtNombre").val();
  let expRegNombre = new RegExp("^[a-zA-Z]{1,}$");
  if (expRegNombre.test(nombre)) {
    $("#errorNombre").html("");
    validarIconos("#nombreCheck", true);
    return true;
  } else {
    $("#errorNombre").html(
      "El nombre solo puede contener letras y no puede estar vacio"
    );
    validarIconos("#nombreCheck", false);
    return false;
  }
}

function validarContraseñas() {
  $("#contraseñaCheck").removeClass("d-none");
  $("#contraseña2Check").removeClass("d-none");
  let contraseña = $("#txtContraseña").val();
  let contraseña2 = $("#txtContraseña2").val();
  if (contraseña.length == 0 || contraseña2.length == 0) {
    if (contraseña.length == 0) {
      $("#errorContraseña").html("La contraseña no puede estar vacia");
      validarIconos("#contraseñaCheck", false);
      return false;
    } else {
      $("#errorContraseña").html("");
      validarIconos("#contraseñaCheck", true);
    }
  }

  if (contraseña === contraseña2) {
    $("#errorContraseña2").html("");
    validarIconos("#contraseñaCheck", true);
    validarIconos("#contraseña2Check", true);
    return true;
  } else if (contraseña2.length == 0) {
    validarIconos("#contraseñaCheck", true);
    return false;
  } else {
    $("#errorContraseña2").html("Ambas contraseñas deben ser iguales");
    validarIconos("#contraseñaCheck", false);
    validarIconos("#contraseña2Check", false);
    return false;
  }
}

function validarCorreo() {
  $("#correoCheck").removeClass("d-none");
  let correo = $("#txtCorreo").val();
  let expRegCorreo = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );
  if (expRegCorreo.test(correo)) {
    $("#errorCorreo").html("");
    validarIconos("#correoCheck", true);
    return true;
  } else {
    $("#errorCorreo").html("El correo no es valido");
    validarIconos("#correoCheck", false);
    return false;
  }
}

function validarCelular() {
  $("#celularCheck").removeClass("d-none");
  let celular = $("#txtCelular").val();
  let expRegCelular = new RegExp("^[0-9]{9}$");
  if (expRegCelular.test(celular)) {
    $("#errorCelular").html("");
    validarIconos("#celularCheck", true);
    return true;
  } else {
    $("#errorCelular").html("El celular debe contener 9 numeros");
    validarIconos("#celularCheck", false);
    return false;
  }
}

function validarFormulario() {
  let formUsuario = validarUsuario();
  let formNombre = validarNombre();
  let formContraseña = validarContraseñas();
  let formCorreo = validarCorreo();
  let formCelular = validarCelular();
  if (
    formUsuario &&
    formNombre &&
    formContraseña &&
    formCorreo &&
    formCelular
  ) {
    return true;
  } else {
    return false;
  }
}

// Eventos:
$("#btnEnviar").click(function () {
  if (validarFormulario()) {
    $("#bannerConfirmacion").removeClass("d-none");
  } else {
    $("#bannerConfirmacion").addClass("d-none");
  }
});

$("#txtUsuario").on("input", validarUsuario);
$("#txtNombre").on("input", validarNombre);
$("#txtContraseña").on("input", validarContraseñas);
$("#txtContraseña2").on("input", validarContraseñas);
$("#txtCorreo").on("input", validarCorreo);
$("#txtCelular").on("input", validarCelular);
