{
  "type": "object",
  "title": "Lançamentos",
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
    "bloco": {
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
          "linkimage": {
            "title": "Link",
            "type": "string"
          }
        }
      }
    }  
  }
}