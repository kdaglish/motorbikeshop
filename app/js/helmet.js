angular.module('helmetProducts', [])

.directive("helmetsList", function(){
  return{
    restrict: 'E',
    templateUrl: "helmets.html"
  };
})

.controller('helmetController', function($http) {
  var ctrl = this;

  ctrl.helmets = [];

  $http.get('/helmets.json').success(function(data){
      ctrl.helmets = data;
  });
})
