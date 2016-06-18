Cpu = new Mongo.Collection('cpu');
var Schemas = {};
Schemas.Cpu = new SimpleSchema({
  nombre:{
    type: String,
    label: "Nombre del cpu",
  },
  precio:{
    type: Number,
    label: "Precio del cpu",
  },
  velocidad:{
    type: Number,
    label: "Velocidad del cpu en GHz",
  },
  cache:{
    type: Number,
    label: "Cache del cpu en Mb",
  },
  litograf:{
    type: String,
    label: "Tecnología de fabricación en Nm",
  },
  bits:{
    type: String,
    label: "Capacidad de leer instrucciones de 64 o 32 bits",
  },
  Nucleos:{
    type: Number,
    label: "Número de nucleos disponibles (logicos o fisicos)",
  },
// -------------------------------------------------------------------
  mem_ram_comp_tipo:{
    type: String,
    label: "Tipo de memoria ram DDR",
  },

  mem_ram_comp_vel_1:{
    type: Number,
    label: "Velocidad de la memoria ram compatible en MHz",
  },

  mem_ram_comp_vel_2:{
    type: Number,
    label: "Velocidad de la memoria ram compatible en MHz",
    optional: true,
  },

  mem_ram_comp_vel_3:{
    type: Number,
    label: "Velocidad de la memoria ram compatible en MHz",
    optional: true,
  },

  mem_ram_comp_vel_4:{
    type: Number,
    label: "Velocidad de la memoria ram compatible en MHz",
    optional: true,
  },

// -------------------------------------------------------------------
  gpu_integrado:{
    type: Boolean,
    label: "Si el cpu cuenta con gpu integrado",
  },

  gpu_nom:{
    type: String,
    label: "Nombre del gpu",
    optional: true,
  },

  gpu_vel:{
    type: Number,
    label: "Velocidad del gpu en MHz",
    optional: true,
  },

  gpu_nem_max:{
    type: Number,
    label: "Memoria Maxima del gpu",
    optional: true,
  },

});

Cpu.attachSchema(Schemas.Cpu);
