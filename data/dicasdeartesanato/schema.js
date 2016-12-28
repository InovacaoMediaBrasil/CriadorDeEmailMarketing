 {  
   "type":"object",
   "title":"Lançamentos",

   "required":["banner", "linkbanner" ],
   "properties":{  
    "banner":{"title":"Banner", "type":"string"},
    "linkbanner":{"title":"Link Banner", "type":"string"},
    "date":{"title":"Data", "type":"string"},

    "class":{  
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
          "title":"Descriçao",
          "type":"string"
        },
        "link":{
          "title":"Link",
          "type":"string"
      
      },
      
      "list":{  
          "type":"array",
          "items":{
           "title":"Item",
           "type":"string"
         }
       }  
    } 
   } 
  }     
 }
}