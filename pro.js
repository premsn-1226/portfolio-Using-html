var booking = angular.module('bookEasy',["ngRoute"]);

booking.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'home.html',
    controller : 'booking'
  })
  .when('/home',{
    templateUrl : 'home.html',
    controller : 'booking'
  })
  .when('/about',{
    templateUrl : 'about.html',
    controller : 'booking'
  })
  .when('/skill',{
    templateUrl : 'skill.html',
    controller : 'booking'
  })
  .when('/contact',{
    templateUrl : 'contact.html',
    controller : 'booking'
  })
  .when('/work',{
    templateUrl : 'firstpage.html',
    controller : 'booking'
  })
  .otherwise({
    redirectTo : '/'
  })
});


booking.controller("booking",['$scope',function ($scope) {
    $scope.title = "Book Easy";
    $scope.main = {head : "Welcome to BookEasy" , des : "We Provide all types of services related to House."};
    $scope.services = {head1 : "Electrician" , head2 : "Plumber"};
    $scope.news = {name : "Newsletter" , Des : "stay updated with our work"};
    $scope.follow = {name : "follow Us" , Des : "Let us be connected together"};
    $scope.des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore aperiam odit minima enim cupiditate vel laborum libero repudiandae alias recusandae, aliquam facere necessitatibus, blanditiis quas voluptate consequuntur? Reprehenderit, odit.";
    $scope.position ="Web Developer";
    $scope.description = "He acts as an frontend developer and he is an active and supportive member in our team.";
}]);
