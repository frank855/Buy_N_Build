Case = new Mongo.Collection('case');

CaseSchema = new SimpleSchema({

tarjeta:{
  type:String,
  label:"Tarjeta madre compatibles",
}
});

DiscoSchema = new SimpleSchema({

cantidadbahia:{
  type: Number,
  label: "Cantidad de bahias para Discos duros",
},

tamaño:{
  type: Number,
  label: "tamaño de la bahia",
}
});

Schemas = new SimpleSchema({

nombre:{
type: String,
label: "Nombre o Modelo",
 },

precio:{
  type:Number,
  label: "Precio",
  decimal: true,
},

ranuras:{
type: Number,
label: "Cantidad de ranuras de expansión",
},

tarjetamadrecompatible:{
  type:[CaseSchema]
},

discoduro:{
type:[DiscoSchema]
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

Case.attachSchema(Schemas);
