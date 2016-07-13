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
  ps_Modular:{
    type: String,
    label: "si es modular o no la Fuente de Poder"
    },
    ps_certif:{
      type: String,
      label: "certificacion de la Fuente de Poder"
      },
  //  ps_conector:{
  //    type: String,
  //    label: "conectores presentes en la Fuente de Poder",
  //    },
  ps_ATXpins:{
    type: String,
    label: "pines  de la ATX",
  },
  ps_cantATXcont:{
    type: Number,
    label: "cantidad de conectores de la ATX",
  },
  ps_CPUpins:{
    type: String,
    label: "pines de la CPU",
  },
  ps_cantCPUcont:{
    type: Number,
    label: "cantidad de conectores de la CPU",
  },
  ps_PCI_Epins:{
    type: String,
    label: "pines de la PCI-E",
  },
  ps_cantPCIEcont:{
    type: Number,
    label: "cantidad de conectores de PCI-E",
  },
  ps_SATApins:{
    type: String,
    label: "pines de SATA",
  },
  ps_cantSATAcont:{
    type: Number,
    label: "cantidad de conectores de SATA",
  },
  ps_Molexpins:{
    type: String,
    label: "pines de Molex",
  },
  ps_cantMoelxcont:{
    type: Number,
    label: "cantidad de conectores Molex",
  },
  ps_abanico:{
    type: String,
    label: "abanico que posee la Fuente de Poder",
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
