function validarForm(){

    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 
  
  
       var nombre = document.getElementById("nombre");
       var apellidos = document.getElementById("apellidos");
       var correo = document.getElementById("Correo");
       var motivo = document.getElementById("motivo");
       var comentarios = document.getElementById("comentarios");
       //Campo nombre
       if(!nombre.value)
       {
        alert("El campo nombre es requerido");
        nombre.focus();
        return false;
       }
       if (!expRegNombre.exec(nombre.value))
       {
          alert("El campo nombre admite letras y espacios.")
          nombre.focus();
          return false;
       }
       //Campo apellido
       if(!apellidos.value)
       {
        alert("El campo apellidos es requerido");
        apellidos.focus();
        return false;
       }
       if(!expRegApellidos.exec(apellidos.value))
       {
         alert("El campo apellidos admite letras y espacios.")
         apellidos.focus();
         return false;
       }
  
  
       //campo email
       if(!correo.value)
       {
        alert("El campo correo es requerido");
        correo.focus();
        return false;
       }
       if(!expRegCorreo.exec(correo.value))
       {
         alert("El campo correo no tiene el formato correcto.")
         correo.focus();
         return false;
       }
       // campo motivo
       if(!motivo.value)
       {
        alert("El campo motivo es requerido");
        motivo.focus();
        return false;
       }
       //campo comentarios
       if(!comentarios.value)
       {
        alert("El campo comentarios es requerido");
        comentarios.focus();
        return false;
       }
  
       return true;
    }
    // asociacion del boton enviar con el formulario en html//
    window.onload = function()
    { 
      var formulario = document.getElementById("contacto-frm");
      formulario.onsubmit = validarForm;
    }