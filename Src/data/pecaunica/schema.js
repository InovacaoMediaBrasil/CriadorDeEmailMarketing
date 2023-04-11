{  
   "type":"object",
   "title":"Peça Unica",

   "required":["banner, linkbanner, items" ],
   "properties":{  
    "banner":{"title":"Banner", "type":"string"},
    "linkbanner":{"title":"Link Banner", "type":"string"},
	"namebanner":{"title":"Nome do banner", "type":"string"},
    "date":{"title":"Data", "type":"string"},
    "class":{  
      "type":"array",

      "items":{
       "title":" ",
       "type":"object",

       "properties":{ 
        "image":{  
          "title":"Imagem",
          "type":"string"
        },
        "title":{  
          "title":"Título",
          "type":"string"
        },
        "description":{
          "title":"Descrição",
          "type":"string"
        }
        
      } 
   }        
 }
}
}