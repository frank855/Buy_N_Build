Ram = new Mongo.Collection('ram');

Mram = new SimpleSchema({

nombre:{
  type:String,
  label:"Nombre",
},

tipo:{
type:String,
label:"Tipo DDR2-3-4",
},

velocidad:{
  type: String,
  label:"Velocidad MHz",
},

capacidad:{
type: Number,
label:"Capacidad GB",
},

precio:{
  type: Number,
  label:"Precio",
},

ecc:{
  type: String,
  label:"ECC",
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

  Ram.attachSchema(Mram);
