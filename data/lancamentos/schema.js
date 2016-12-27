{  
   "type":"object",
   "title":"Lançamentos",

   "required":["banner, linkbanner, items" ],
   "properties":{  
    "banner":{"title":"Banner", "type":"string"},
    "linkbanner":{"title":"Link Banner", "type":"string"},
    "date":{"title":"Data", "type":"string"},
    "product":{  
      "type":"array",
      "items":{
       "title":" ",
       "type":"object", 
       "properties":{ 
        "title":{  
          "title":"Título",
          "type":"string"
        },
        "image":{  
          "title":"Imagem",
          "type":"string"
        },
        "subtitle":{
          "title":"Subtitulo",
          "type":"string"
        },
        "description":{
          "title":"Descrição",
          "type":"string"
        },
        "link":{
          "title":"Link",
          "type":"string"
        },
        "list":{  
          "type":"array",
          "items": {
            "type" : "string",
            "title":"Itens"
          }
        }
      } 
    }        
  }
}
}