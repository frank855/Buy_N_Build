TVideo = new Mongo.Collection('tvideo');

Puertos = new SimpleSchema({

puerto:{
  type: String,
  label:"Puerto",
},

cantidad:{
  type: Number,
  label: "número de puertos",
}
});

tvideoSchema = new SimpleSchema({

nombre:{
  type: String,
  label:"Nombre de la Tarjeta de video",
},

interfaz:{
  type: Number,
  label: "Interfaz PCI-E 2.0-3.0",
  decimal: true,
},

pines:{
  type: Number,
  label:"cantidad de pines necesarios para psu",
},

gpu:{
  type: String,
  label: "GPU",
},

relojnucleo:{
  type: Number,
  label: "Reloj del nucleo MHz",
  decimal: true,
},

tamañomemoria:{
type: Number,
label: "Tamaño de memoria GB",
},

interfazmemoria:{
  type: Number,
  label: "Interfaz de memoria 32-64 bits",
},

tipomemoria:{
  type: String,
  label:"Tipo de memoria DDR2-DDR3",
},

precio:{
  type: Number,
  label:"Precio",
  decimal: true,
},

puertos:{
  type:[Puertos]
},

img:{
  type: String,
  autoform: {
    afFieldInput: {
      type: "cfs-file",
      collection: "images",
    }
  }
  },

});

TVideo.attachSchema(tvideoSchema);
