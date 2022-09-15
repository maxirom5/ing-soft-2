 $('#btSalir').click(salir);
 function salir(){
 navigator.app.exitApp();
 }
 $('#btIngresar').click(ingresar);
 function ingresar(){
 var inUsuario = $('#inUsuario');
 var usuario = inUsuario.val().trim();
 inUsuario.val(usuario);
 var inContrasena = $('#inContrasena');
 var contrasena = inContrasena.val().trim();
 inContrasena.val(contrasena);
 if (usuario == "A" && contrasena == "1") {
    } else {
         alert ("Ingreso incorrecto");
 }
 }