
 // Función para validar un Apellido o Nombre 
  function validateApellido(apellido)
  {
 //Creamos un objeto 
 object=document.getElementById(apellido);
 valueForm=object.value;
  //  Patron para el apellido 
  var patron=/^[a-z A-z]{2,16}$/;
    if(valueForm.search(patron)==0)
	{
	 //Apellido correcto Con color azul
	object.style.color="#0033CC";
	 return;
	 }
	  //Apellido incorrecto Con rojo
	 object.style.color="#990000";
	 alert('No puede Escribir Números u otros Caractéres que no sean letras');
 
   } 

   function validarForm(){
    
    var verificar = true;
    
      var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^[\w-\.]+@([\w-])+\.)+[\w-]{2,4}$/; 
    
    
         var formulario = document.getElementById("contacto-frm");
         var nombre = document.getElementById("nombre");
         var apellidos = document.getElementById("apellidos");
         var correo = document.getElementById("correo");
         var asunto = document.getElementById("asunto");
         var comentarios = document.getElementById("comentarios");
    //Campo nombre
         if(!nombre.value)
         {
          alert("El campo nombre es requerido");
          nombre.focus();
          verificar==false;
         }
         else if (!expRegNombre.exec(nombre.value))
         {
            alert("El campo nombre admite letras y espacios.")
            nombre.focus();
            verificar=false;
    
         }
    //CAmpo apellido
    
          else if(!apellidos.value)
         {
          alert("El campo apellidos es requerido");
          apellidos.focus();
          verificar=false;
         }
         else if(!expRegApellidos.exec(apellidos.value))
         {
           alert("El campo apellidos admite letras y espacios.")
           apellidos.focus();
           verificar=false;
         }
    
    
    //campo email
          else if(!correo.value)
         {
          alert("El campo correo es requerido");
          correo.focus();
          verificar=false;
         }
         else if(!expRegCorreo.exec(correo.value))
         {
           alert("El campo nombre admite letras y espacios.")
           correo.focus();
           verificar=false;
         }
    // campo asunto
           else if(!asunto.value)
         {
          alert("El campo asunto es requerido");
          nombre.focus();
          verificar=false;
         }
    //campo comentarios
          else if(!comentarios.value)
         {
          alert("El campo comentarios es requerido");
          comentarios.focus();
          verificar=false;
         }
    
        if(verificar)
        {
          alert("Se ha enviado el formulario");
         document.contacto_frm.submit();
        }
    
    
    
    alert("Enviando");
     document.contacto_frm.submit();
    
      }
      // asociacion del boton enviar con el formulario en html//
      window.onload = function()
      { 
        var botonEnviar;
        botonEnviar = document.contacto_frm.enviar_btn;
        botonEnviar.onclick = validarForm;
      }
	  
	  
	 function formatoFecha() {
    var fecha=date();
    const map = {
        dd: fecha.getDate(),
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched]);
}

function  getTemp() {
    
  fetch('https://goweather.herokuapp.com/weather/buenos%20aires')
         .then(res => {
             return res.json()
         })
         .then(post => {
             const temp = post.temperature ;
             const tempdes =post.description
             document.write('El tiempo en Buenos Aires: ' + temp +  ' - ' + tempdes);
             console.log(post.temperature);
             console.log(post.description);
             
         })
 }