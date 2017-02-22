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
    "title": "Nome do banner",
    "key": "namebanner",
    "placeholder": "Informe o nome do banner"
  },  
  {
    "title": "Data",
    "key": "date",
    "placeholder": "Data final da oferta"
  },

  {
    "title": "Produto",
    "key": "product",
    "add": "Novo bloco produto",
    "style": {
      "add": "btn-success"
    },

    "items": [{
        "key": "product[].title",
        "placeholder": "Nome do produto"
      }, {
        "key": "product[].image",
        "placeholder": "Caminho da imagem"
      },

      {
        "key": "product[].subtitle",
        "placeholder": "Subtitulo"
      },

      {
        "key": "product[].description",
        "type": "textarea",
        "placeholder": "Descrição do produto"
      },

      {
        "key": "product[].link",
        "placeholder": "Link para compra"
      },


      {
        "key": "product[].list",
        "title": "Lista de materiais",
        "add": "Novo material",
        "style": {
        "add": "btn-success"
    },
        "items": [{
            "key": "product[].list[]",
            "placeholder": "Material"
          }
        ]
      }
    ]
  }
]