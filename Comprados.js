var ejemplo_vModel = new Vue({
  el: '#ejemploVM',
  data: {
    titulo: "Carrito de compras",
    items: [
      
      { nombre: "Zapatillas", cantidad:0 },
      { nombre: "Zapatos", cantidad: 0 },
      { nombre: "Tacos Altos", cantidad: 0 },
	    { nombre: "Tacos Medios", cantidad: 0 }
    ],
    nuevoItem: '',
    total: 0
  },
  methods: {
    agregarItemConIF() {
      if (this.nuevoitem != "") {
        this.items.push({ nombre: this.nuevoItem, cantidad: 0 });
        this.nuevoitem = '';
      }
    },
    sumarItem (ndx)
    {
      items[ndx].cantidad++;
    },
    
    restar (ndx)
    {
      items[ndx].cantidad++;
    },
 
  },
  
  computed: {
    sumaritems() {//Muestra sumatoria total de cantidades de frutas.
      this.total = 0;
      for (item of this.items) {
        this.total += item.cantidad; //acumulador
      }
      return this.total;
    },
    vaciarCarrito (){
      for  (item in items ) {item.cantidad=0; }
    }
    

  }
})