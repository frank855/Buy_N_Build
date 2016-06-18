Desktop = new Mongo.Collection('desktop');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/images"})]
});

Disco_Duro = new SimpleSchema({
  hdd_unit:{
    type: String,
    label: "Unidad de medida Gb O Tb",
  },

  hdd_cap:{
    type: Number,
    label: "Capacidad del disco duro en la unidad definida",
  },

  hdd_tipo:{
    type: String,
    label: "Tipo de disco duro SATA, De Estado Solido, Hibrido...",
  },

  hdd_vel:{
    type: Number,
    label: "Velocidad del disco duro en la unidad definida",
  },

  hdd_velunit:{
    type: String,
    label: "Unidad en la que se mide la velocidad del disco duro mb/s, RPM, etc...",
  },

});

Ram = new SimpleSchema({
  ram_cap:{
    type: Number,
    label: "Cantidad de ram en Gb",
  },
  ram_tipo:{
    type: String,
    label: "Tipo de ram DDR3 o DDR4",
  },
  ram_vel:{
    type: Number,
    label: "Velocidad de la ram en MHz",
    decimal: true,
  },

});

Gpu = new SimpleSchema({
  nombre_gpu:{
    type: String,
    label: "Nombre de la gpu",
  },
  gpu_cap:{
    type: Number,
    label: "Cantidad de vram en Gb",
  },
  gpu_tipo_mem:{
    type: String,
    label: "Tipo de ram DDR3 o GDDR3 o GDDR5 etc...",
  },
  gpu_vel:{
    type: Number,
    label: "Velocidad de la vram en MHz",
    decimal: true,
  },
});

DesktopSchema = new SimpleSchema({
nombre:{
  type: String,
  label: "Nombre del producto",
},
precio:{
  type: Number,
  label: "Precio del producto",
  decimal: true,
},
cpu_brand:{
  type: String,
  label: "Marca del Cpu, AMD, Intel...",
},
cpu_nom:{
  type: String,
  label: "Nombre del cpu",
},
cpu_vel:{
  type: Number,
  label: "Velocidad del cpu en GHz",
  decimal: true,
},
gpu_integrado:{
  type: String,
  label: "Si el gpu es integrado o dedicado",
},

ram:{
  type:[Ram]
},

hdd:{
  type:[Disco_Duro]
},

gpu:{
  type:[Gpu]
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

Desktop.attachSchema(DesktopSchema);
