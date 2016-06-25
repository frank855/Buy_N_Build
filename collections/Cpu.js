Cpu = new Mongo.Collection('cpu');
Ram_Comp_Vel = new SimpleSchema({
    mem_ram_comp_vel:{
      type: Number,
      label: "Velocidad de la memoria ram compatible en MHz",
    },

});

Ram_Comp = new SimpleSchema({
  mem_ram_comp_tipo:{
    type: String,
    label: "Tipo de memoria ram DDR",
  },

  ram_comp_vel:{
    type:[Ram_Comp_Vel]
  },


});

CpuSchema = new SimpleSchema({
  nombre:{
    type: String,
    label: "Nombre del cpu",
  },

  precio:{
    type: Number,
    label: "Precio del cpu",
    decimal: true,
  },

  marca:{
    type: String,
    label: "Marca del cpu",
  },

  zocalo:{
    type: String,
    label: "Zocalo del cpu",
  },

  velocidad:{
    type: Number,
    label: "Velocidad del cpu en GHz",
    decimal: true,
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
  nucleos:{
    type: Number,
    label: "Número de nucleos disponibles (logicos o fisicos)",
  },
// -------------------------------------------------------------------

  ram_comp:{
    type:[Ram_Comp]
  },

// -------------------------------------------------------------------
  gpu_integrado:{
    type: String,
    label: "Si el cpu cuenta con gpu integrado, si o no",
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
Cpu.attachSchema(CpuSchema);
