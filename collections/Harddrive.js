Harddrive = new Mongo.Collection('harddrive');
Disco_Duro = new SimpleSchema({
  dd_nombre:{
    type: String,
    label: "Nombre del Disco Duro",
  },
  dd_capacidad:{
    type: Number,
    label: "capacidad del Disco Duro",
  },
  dd_forma:{
    type: String,
    label: "forma",
  },
  dd_buffer:{
    type: String,
    label: "tamaño de buffer del Disco Duro",
  },
  dd_velocidad:{
    type: Number,
    label: "velocidad de giro del Disco Duro",
  },
  dd_interfaz:{
    type: String,
    label: "interfaz del Disco Duro",
  },
  dd_precio:{
    type: Number,
    label: "precio del Disco Duro",
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
  Harddrive.attachSchema(Disco_Duro);
