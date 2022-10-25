    // asociacion del boton enviar con el formulario en html//
    window.onload = function () {
    
        document.formularioRegistro.nombre.focus();
        
        document.formularioRegistro.addEventListener('submit', validarFormulario);
        
        }


        function validarFormulario(evObject) {
    
            evObject.preventDefault();
            
            var verificado = true;
        
            
            var formulario = document.formularioRegistro;
        
            var mensajesError = [];
            var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            var validaClave = /^[a-zA-Z0-9]{4,6}$/;
            
            for (var i=0; i<formulario.length; i++) {

                console.log(verificado);
                            if(formulario[i].type =='text') {
                   
                           
                                           if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
            
                                           mensajesError.push('- '+formulario[i].name+ ' no puede estar vacío.')
            
                                           verificado=false;
            
                                           }
            
                            }
                            if(formulario[i].type == 'email'){
                                if( validEmail.test(formulario[i].value) ){
                                
                                } else {
                                verificado = false;
                                mensajesError.push('- El email es incorrecto.')
                                }
                            }
                            if(formulario[i].type =='textarea') {
            
                                if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
        
                                    mensajesError.push('- '+formulario[i].name+ ' no puede estar vacío.')
        
                                    verificado=false;
        
                                }
        
                            }

                            if (formulario[i].name == 'pass1'){
                        
                                if( validaClave.test(formulario[i].value) ){
                                    if (formulario[i].value != document.getElementById("pass2").value){
                                        console.log(document.getElementById("pass2").value);
                                        console.log(formulario[i].value);
                                        mensajesError.push('- Las contraseñas no coinciden.');
                                        verificado= false;
                                    }
                                } else {
                                    mensajesError.push('- La contraseña debe tener entre 4 y 8 caracteres alfanumericos.');
                                     
                                    verificado= false;                              
                                }
                            }
        
                            
                            }
            
            if (verificado == true) {
                               
   
            } else { 
                alert(mensajesError.join('\n '));
            }
            
            }      