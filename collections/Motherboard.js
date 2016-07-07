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
  mb_conpin:{
    type: String,
    label: "conector de alimentacion de la Tarjeta Madre",
  },
  mb_tPCI_E:{
    type: String,
    label: "Tipo de PCI-E de la Tarjeta Madre",
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
