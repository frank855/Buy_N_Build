Meteor.startup(function () {
    if (!Desktop.findOne()) {
      Desktop.insert(
        {
          "_id": "xD9XYdMmsDvfd3XrT",
          "nombre": "HP Desktop",
          "precio": 399.99,
          "cpu_brand": "Intel",
          "cpu_nom": "Intel Core i3-4130",
          "cpu_vel": 3,
          "gpu_integrado": "Integrado",
          "ram": [
            {
              "ram_cap": 4,
              "ram_tipo": "DDR3",
              "ram_vel": 1333
            }
          ],
          "hdd": [
            {
              "hdd_unit": "Gb",
              "hdd_cap": 500,
              "hdd_tipo": "SATA",
              "hdd_velunit": "RPM",
              "hdd_vel": 5400
            }
          ],
          "gpu": [
            {
              "nombre_gpu": "Intel HD Graphics 4000",
              "gpu_cap": 1.7,
              "gpu_tipo_mem": "DDR3",
              "gpu_vel": 350
            }
          ],
          "img": "PCtTfRnHwb4qecHX3",
          "sub_LepwyQ2Bj659RHMcZ": 1,
          "sub_ZyE9WrquMYw3wMhRb": 1
        }
         );
      //-----------------------------------------------
      Desktop.insert(
        {
          "_id": "ueifATvj8ziKPqQbB",
          "nombre": "Dell Desktop",
          "precio": 499.99,
          "cpu_brand": "Intel",
          "cpu_nom": "Intel Core i5",
          "cpu_vel": 3.5,
          "gpu_integrado": "Integrado",
          "ram": [
            {
              "ram_cap": 6,
              "ram_tipo": "DDR3",
              "ram_vel": 1600
            }
          ],
          "hdd": [
            {
              "hdd_unit": "Gb",
              "hdd_cap": 750,
              "hdd_tipo": "SATA",
              "hdd_velunit": "RPM",
              "hdd_vel": 7200
            }
          ],
          "gpu": [
            {
              "nombre_gpu": "Intel HD Graphics 4000",
              "gpu_cap": 1,
              "gpu_tipo_mem": "DDR3",
              "gpu_vel": 400
            }
          ],
          "img": "dXravHxdpE2M9aRcQ",
          "sub_LepwyQ2Bj659RHMcZ": 1,
          "sub_ZyE9WrquMYw3wMhRb": 1
        }
         );
      //-----------------------------------------------
      Desktop.insert(
      {
        "_id": "PGdQM2vnzc7qeQYcj",
        "nombre": "Desktop Avanzada",
        "precio": 599.99,
        "cpu_brand": "Intel",
        "cpu_nom": "Intel Core i7",
        "cpu_vel": 4,
        "gpu_integrado": "Integrado",
        "ram": [
          {
            "ram_cap": 8,
            "ram_tipo": "DDR3",
            "ram_vel": 1600
          }
        ],
        "hdd": [
          {
            "hdd_unit": "Tb",
            "hdd_cap": 1,
            "hdd_tipo": "SATA",
            "hdd_velunit": "RPM",
            "hdd_vel": 7200
          },
          {
            "hdd_unit": "Gb",
            "hdd_cap": 64,
            "hdd_tipo": "SSD",
            "hdd_velunit": "Mb/s",
            "hdd_vel": 450
          }
        ],
        "gpu": [
          {
            "nombre_gpu": "Intel HD Graphics 4000",
            "gpu_cap": 1.7,
            "gpu_tipo_mem": "DDR3",
            "gpu_vel": 450
          }
        ],
        "img": "xmWLP73aNmoCbCyDD",
        "sub_LepwyQ2Bj659RHMcZ": 1,
        "sub_ZyE9WrquMYw3wMhRb": 1
      }
       );
       //-----------------------------------------------
       Desktop.insert(
         {
           "_id": "oQjPzsAhx5pgo5i5p",
           "nombre": "Computadora de escritorio Cooler Master",
           "precio": 600.65,
           "cpu_brand": "AMD",
           "cpu_nom": "AMD A-10 5800K",
           "cpu_vel": 4,
           "gpu_integrado": "Integrado",
           "ram": [
             {
               "ram_cap": 8,
               "ram_tipo": "DDR3",
               "ram_vel": 1600
             }
           ],
           "hdd": [
             {
               "hdd_unit": "Gb",
               "hdd_cap": 750,
               "hdd_tipo": "SATA",
               "hdd_velunit": "RPM",
               "hdd_vel": 7200
             }
           ],
           "gpu": [
             {
               "nombre_gpu": "AMD Radeon HD 7660D",
               "gpu_cap": 2,
               "gpu_tipo_mem": "DDR3",
               "gpu_vel": 800
             }
           ],
           "img": "ps9Li5g9f67Hiu2Ex",
           "sub_LepwyQ2Bj659RHMcZ": 1,
           "sub_ZyE9WrquMYw3wMhRb": 1
         }
        );
    }
});
