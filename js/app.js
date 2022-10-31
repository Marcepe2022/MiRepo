window.onload = obtenerUsuarios;


function obtenerUsuarios() {

var contenido0 = document.querySelector('#app0');
var contenido1 = document.querySelector('#app1');
var contenido2 = document.querySelector('#app2');
var contenido3 = document.querySelector('#app3');
  console.log('test')
  traer(contenido0)  
  traer(contenido1) 
  traer(contenido2) 
  traer(contenido3) 
}


function traer(objeto) {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            objeto.innerHTML = `
            <div> 
            <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rouded-circle">
            <br>
            <p>Nombre: ${data.results['0'].name.first} </p>
            <p>Apellido: ${data.results['0'].name.last} </p>
            <p>Teléfono: ${data.results['0'].cell} </p>
            </div>
            `

        })
}





