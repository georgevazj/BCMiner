angular.module("bcminer",["ngRoute","ngResource"])
  .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      })
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        controller: "MainController",
        templateUrl: "templates/layout.html"
      })
      .otherwise({
        redirectTo: '/'
      })
  })
