angular.module('bikeStore', [
  'ngRoute',
  'helmetProducts',
  'bikeProducts'
])

.config(function($routeProvider){
  $routeProvider.
  when('/bikes', {
    template: '<bikes-list></bikes-list>'
  }).
  when('/helmets', {
    template: '<helmets-list></helmets-list>'
  }).
  otherwise('/bikes');
})

.controller('primaryTabController', function(){
  this.primaryTabIndex = 1;

  this.primaryTabChange = function(TabIndex){
    this.primaryTabIndex = TabIndex;
  }
});
