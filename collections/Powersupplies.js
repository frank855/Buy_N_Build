Powersupplies = new Mongo.Collection('powersupplies');
Fuente_de_Poder = new SimpleSchema({
  ps_nombre:{
    type: String,
    label: "Nombre de la Fuente de Poder",
  },
  ps_watt:{
    type: Number,
    label: "Voltaje de la Fuente de Poder",
  },
  ps_pins:{
    type: String,
    label: "pines",
  },
  ps_abanico:{
    type: String,
    label: "abanico que posee la Fuente de Poder",
  },
  ps_conector:{
    type: String,
    label: "conectores presentes en la Fuente de Poder",
  },
  ps_precio:{
    type: Number,
    label: "precio en la Fuente de Poder",
    decimal:true,
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
  Powersupplies.attachSchema(Fuente_de_Poder);

//PowersuppliesSchema = new SimpleSchema({
  //nombre:{
  //  type: String,
  //  label: "Nombre del producto",
//  },
//  precio:{
//    type: Number,
//    label: "Precio del producto",
//  },
//  voltaje:{
//    type: Number,
//    label: "Voltaje del producto",
//  },
//  ps:{
//    type:[Fuente_de_Poder]
//  }
//
//});
//  Powersupplies.attachSchema(PowersuppliesSchema);
