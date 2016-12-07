angular.module('bikeProducts', [])

.directive("bikesList", function(){
  return{
    restrict: 'E',
    templateUrl: "bikes.html"
  };
})

.controller('bikesController', function($http) {
  var ctrl = this;

  ctrl.bikes = [];

  $http.get('/bikes.json').success(function(data){
      ctrl.bikes = data;
  });

  this.addReview = function(bike, review) {
    bike.reviews.push(review);
  };
})
