{
  "type": "object",
  "title": "Dicas de artesanato",
  "required": ["banner" ,"linkbanner", "items"],
  "properties": {
    "banner": {
      "title": "Banner",
      "type": "string"
    },
    "linkbanner": {
      "title": "Link Banner",
      "type": "string"
    },
	"namebanner": {
      "title": "Nome do banner",
      "type": "string"
    },
    "program": {
      "type": "array",
      "items": {
        "title": " ",
        "type": "object",
        "properties": {
          "image": {
            "title": "Imagem",
            "type": "string"
          },
          "title": {
            "title": "Título",
            "type": "string"
          },
          "description": {
            "title": "Descrição",
            "type": "string"
          },
          "linkprogram": {
            "title": "Link Image",
            "type": "string"
          }
        }
      }
    }  
  }
}

