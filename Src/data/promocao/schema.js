{  
   "type":"object",
   "title":"Pormocional",
   "required":[ "banner","linkbanner", "date"],
   "properties":{  
      "banner":{  
         "title":"Banner",
         "type":"string"
      },
      "linkbanner":{  
         "title":"Link Banner",
         "type":"string"
      },
	  "namebanner":{  
         "title":"Nome do banner",
         "type":"string"
      },
      "date":{  
         "title":"Data",
         "type":"string"
      },
      "products":{  
         "type":"array",
         "items":{  
            "title":" ",
            "type":"object",
            "properties":{  
               "title":{  
                  "title":"Título do bloco",
                  "type":"string"
               },
               
               "image1":{  
                  "title":"Imagem do produto 1",
                  "type":"string"
               },
               "description1":{  
                  "title":"Nome do produto 1",
                  "type":"string"
               },
               "value1":{  
                  "title":"Valor do produto 1",
                  "type":"string"
               },
               "parcelas1":{  
                  "title":"Numero de parcelas 1",
                  "type":"string"
               },
               "valorparcela1":{  
                  "title":"Valor da parcela 1",
                  "type":"string"
               },
               "precovst1":{  
                  "title":"Preço a vista 1",
                  "type":"string"
               },
               "precoanterior1":{  
                  "title":"Valor anterior",
                  "type":"string"

               },
			   "desconto1":{  
                  "title":"Desconto",
                  "type":"string"

               },

               "linkcompra1":{  
                  "title":"Link para compra 1",
                  "type":"string"
               },

               "image2":{  
                  "title":"Imagem do produro 2",
                  "type":"string"
               },
               "description2":{  
                  "title":" Nome do produto 2",
                  "type":"string"
               },
               "value2":{  
                  "title":"Valor do produto 2",
                  "type":"string"
               },
               "parcelas2":{  
                  "title":"Numero de parcelas 2",
                  "type":"string"
               },
               "valorparcela2":{  
                  "title":"Valor da parcela 2",
                  "type":"string"
               },
                "precovst2":{  
                  "title":"Preço a vista 2",
                  "type":"string"
               },

                "precoanterior2":{  
                  "title":"Valor anterior",
                  "type":"string"
               },
			    "desconto2":{  
                  "title":"Desconto",
                  "type":"string"

               },


               "linkcompra2":{  
                  "title":"Link para compra 2",
                  "type":"string"
               },
               "image3":{  
                  "title":"Imagem do produto 3",
                  "type":"string"
               },
               "description3":{  
                  "title":"Nome do produto 3",
                  "type":"string"
               },
               "value3":{  
                  "title":"Valor do produto 3",
                  "type":"string"
               },
               "parcelas3":{  
                  "title":"Numero de parcelas 3",
                  "type":"string"
               },
               "valorparcela3":{  
                  "title":"Valor da parcela 3",
                  "type":"string"
               },
                "precovst3":{  
                  "title":"Preço a vista 3",
                  "type":"string"
               },

               "precoanterior3":{  
                  "title":"Valor anterior",
                  "type":"string"
               
               },
			    "desconto3":{  
                  "title":"Desconto",
                  "type":"string"

               },

               "linkcompra3":{  
                  "title":"Link para compra 3",
                  "type":"string"
               },
               "imagebanner":{  
                  "title":"Imagem banner",
                  "type":"string"
               }
            }
         }
      }
   }
}