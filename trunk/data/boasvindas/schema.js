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
    "program": {
      "type": "array",
      "items": {
        "title": " ",
        "type": "object",
        "properties": {
          "image": {
            "title": "Logo do programa",
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
          "linkprograms": {
            "title": "Link",
            "type": "string"
          }
        }
      }
    }  
  }
}