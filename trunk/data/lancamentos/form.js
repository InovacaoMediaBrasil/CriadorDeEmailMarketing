[{
    "title": "Banner",
    "key": "banner",
    "placeholder": "Informe o endereço do banner"
  }, {
    "title": "Link Banner",
    "key": "linkbanner",
    "placeholder": "Informe o Link do banner"
  }, {
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
        "placeholder": "Descriçao do produto"
      },

      {
        "key": "product[].link",
        "placeholder": "Link para compra"
      },


      {
        "key": "product[].list",
        "title": "Lista de itens",
        "items": [{
            "key": "product[].list[]",
            "placeholder": "Item"
          }
        ]
      }
    ]
  }
]