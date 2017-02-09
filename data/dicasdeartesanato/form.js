[{
    "title": "Banner",
    "key": "banner",
    "placeholder": "Informe o endereço do banner"
  }, 
  {
    "title": "Link Banner",
    "key": "linkbanner",
    "placeholder": "Informe o link do banner"
  }, 
  {
    "date": "Data",
    "key": "date",
    "placeholder": "Data final da oferta"
  },

  {
    "title": "Aula",
    "key": "class",
    "add": "Novo produto",
    "style": {
      "add": "btn-success"
    },
    "items":
     [{
        "key": "class[].title",
        "placeholder": "Título da aula"
      },
      {
        "key": "class[].image",
        "placeholder": "Caminho da imagem"
      }, {
        "key": "class[].subtitle",
        "placeholder": "Passo da aula"
      }, {
        "key": "class[].description",
         "type": "textarea",
        "placeholder": "Descrição do passo"
      },

      {
        "key": "class[].link",
        "placeholder": "Link para compra"
      },

       {
        "key": "class[].list",
        "title": "Lista de materiais",
        "add": "Novo material",
        "style": {
        "add": "btn-success"
    },
        "items": [{
          "key": "class[].list[]",
          "placeholder": "Material"
        }]
      }
    ]
  }
]