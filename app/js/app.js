angular.module('bikeStore', [
  'ngRoute',
  'helmetProducts',
  'bikeProducts',
  'contact',
  'home'
])

.config(function($routeProvider){
  $routeProvider.
  when('/home', {
    template: '<home></home>'
  }).
  when('/bikes', {
    template: '<bikes-list></bikes-list>'
  }).
  when('/helmets', {
    template: '<helmets-list></helmets-list>'
  }).
  when('/contact', {
    template: '<contact></contact>'
  }).
  otherwise('/home');
});
