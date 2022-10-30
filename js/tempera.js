
 const apiKey = "ae15fffbb9e9446e73986bb2e5327481";

const main = document.getElementById('main');
const footer = document.getElementById('footer');
const form = document.getElementById('form');
const search = document.getElementById('search');
 
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


async function getWeatherByLocation(city){

         const resp = await fetch(url(city), {
             origin: "cros" });
         const respData = await resp.json();
     
           addWeatherToPage(respData);
          
     }

      function addWeatherToPage(data){
          const temp = Ktoc(data.main.temp);

          const weather = document.createElement('div');
          weather.classList.add('weather');

          weather.innerHTML = `
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
          <small>${data.weather[0].main}</small>
          
          `;
          const node =document.createElement("p");
        node.classList.add('node');
        node.innerHTML="";
        main.appendChild(node);
/*         const node =document.createElement("p");
        const textnode=document.createTextNode(weather);
        node.appendChild(textnode);
        document.getElementById("footer").appendChild(node); */
        //   cleanup 
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function Ktoc(K){
         return Math.floor(K - 273.15);
     }



     form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;

        if(city){
            getWeatherByLocation(city)
        }

     });


	 function formatoFecha(){
        var fecha=date();
        const map = {
            dd: fecha.getDate(),
            mm: fecha.getMonth() + 1,
            yy: fecha.getFullYear().toString().slice(-2),
            yyyy: fecha.getFullYear()
        }
    
        return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched]);
    }
    formatoFecha();