
var app = angular.module("FormController",["schemaForm"]);
app.controller("form", function($scope, $http) { 
  
  $scope.availableTemplates = [
  { name: "Vitrine do Artesanato - Boas Vindas", data:"boasvindas"},
  { name: "Vitrine do Artesanato - Dicas de Artesanatos", data: "dicasdeartesanato" },
  { name: "Vitrine do Artesanato - Lançamentos", data: "lancamentos" },
  { name: "Vitrine do Artesanato - Peça Unica", data: "pecaunica" },
  { name: "Vitrine do Artesanato - Promocional", data: "promocao" },
  ]; 
  $scope.modelData = {};
  $scope.decorator = 'bootstrap-decorator';

 
  $scope.processModel = function(){    
    try {
      $scope.result = $scope.template($scope.modelData);
      $("#preview").contents().find("body").html($scope.result);
      $("#result").text($scope.result);
    }catch(e){
      $("#error").text(e.message).show();
    }  
  };

  $scope.renderCode = function(){
    $("#modalResult").modal()
  };

  
  $scope.$watch("selectTemplate",function(val){
    if (!val || val.data == undefined)
	  return;	
    $("#error").hide();

    
    var r =  Math.round(Math.random() * 1024);
    $http.get('data/' + val.data + '/schema.js?r=' + r).then(function (res){ $scope.schema = res.data;});
    $http.get('data/' + val.data + '/form.js?r=' + r).then(function (res){ $scope.form = res.data;});   
    $http.get('data/' + val.data + '/template.html?r=' + r).then(function(res){ $scope.template = Handlebars.compile(res.data);}) 
  });  
}) 


Handlebars.registerHelper("eachItem", function(items, options){
 var result = "";
 for(var i=0; i<items.length; i++)
 {  
   var current = items[i]; 
   if (options.data) {
     data = Handlebars.createFrame(options.data || {});
     data.index = i;
   }
   result += options.fn(current, { data: data });  
 }     
 return result;
}); 


Handlebars.registerHelper('if_even', function(element, options) {
  if(options != null && options.data != null && options.data.index % 2 == 0)
    return options.fn(this);
  else
    return options.inverse(this);
});