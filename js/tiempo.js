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
             
		 }
         