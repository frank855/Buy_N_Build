Motherboard = new Mongo.Collection('motherboard');
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
  // este para el ATX ya sea de 1 o 8 pines, 12 V
  mb_conATXsec:{
    type: String,
    label: "conector de alimentacion  pines ATX V de la Tarjeta Madre",
  },
  mb_tPCI_Ex16:{
    type: String,
    label: "tipo de conector PCI-Ex16 de la Tarjeta Madre",
    },
    mb_cPCI_Ex16:{
      type: Number,
      label: "Cantidad de ranuras PCI-Ex16 de la Tarjeta Madre",
  },
    mb_tPCI_E:{
      type: String,
      label: "Tipo de conector PCI-E de la Tarjeta Madre",
  },
  mb_cPCI:{
    type: Number,
    label: "Cantidad de ranuras PCI-E de la Tarjeta Madre",
    },

  mb_precio:{
    type: Number,
    label: "precio en la Tarjeta Madre",
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
  Motherboard.attachSchema(Tarjeta_Madre);
