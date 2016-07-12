Motherboard = new Mongo.Collection('motherboard');
PuertosPT= new SimpleSchema({
pt_PS2_teclado:{
  type: Number,
  label:"Puerto P/2 para el teclado",
},
pt_PS2_mouse:{
  type: Number,
  label:"Puerto P/2 para el mouse",
},
pt_VGA:{
  type: Number,
  label:"Puerto de video VGA",
},
pt_DVI:{
  type: Number,
  label: "puerto de video DVI",
},
pt_HDMI:{
  type: Number,
  label: "puerto HDMI",
},
pt_LAN:{
  type: Number,
  label: "puerto LAN RJ-45",
},
pt_USB2:{
  type: Number,
  label: "puerto USB 2.0",
},
pt_USB3:{
  type: Number,
  label: "puerto USB 3.0",
},
pt_audio:{
  type: Number,
  label: "puerto de audio",
},
});

Tarjeta_Madre = new SimpleSchema({
  mb_nombre:{
    type: String,
    label: "Nombre de la tarjeta Madre",
  },
  mb_socket:{
    type: String,
    label: "Socket de la tarjeta Madre",
  },
  mb_dispalmac:{
    type: String,
    label: "Tipo de dispositivo de almacenamiento de la tarjeta Madre",
  },
  mb_conalmac:{
    type: Number,
    label: "Cantidad de conectores de almacenamiento la Tarjeta Madre",
    },
  mb_tram:{
    type: String,
    label: "Tipo de ram que usa la Tarjeta Madre",
  },
  mb_cranram:{
    type: Number,
    label: "Cantidad de ranuras ram de la Tarjeta Madre",
  },
  mb_frecram:{
    type: Number,
    label: "Frecuencia de ram de la Tarjeta Madre",
  },
//este es para el ATX de de 24 pines
  mb_conATXprin:{
    type: String,
    label: "conector de alimentacion principal ATX de la Tarjeta Madre",
  },
  // este para el ATX ya sea de 4 o 8 pines, 12 V
  mb_conATXsec:{
    type: String,
    label: "conector de alimentacion  pines ATX V de la Tarjeta Madre",
  },
  //mb_tPCI_Ex16:{
  //   type: String,
  //  label: "tipo de conector PCI-Ex16 de la Tarjeta Madre",
  //  },
    mb_cPCI_Ex16:{
      type: Number,
      label: "Cantidad de ranuras PCI-Ex16 de la Tarjeta Madre",
  },
  //  mb_tPCI_E:{
  //    type: String,
  //    label: "Tipo de conector PCI-E de la Tarjeta Madre",
  //},
  mb_cPCI:{
    type: Number,
    label: "Cantidad de ranuras PCI-E de la Tarjeta Madre",
    },

  mb_precio:{
    type: Number,
    label: "precio en la Tarjeta Madre",
    decimal:true,
  },

  puertos:{
    type:[PuertosPT]
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
  Motherboard.attachSchema(Tarjeta_Madre);
