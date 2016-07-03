Case = new Mongo.Collection('case');

CaseSchema = new SimpleSchema({

tarjeta:{
  type:String,
  label:"Tarjeta madre compatibles",
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
}
});

Case.attachSchema(Schemas);
