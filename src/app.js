angular.module("bcminer",["ngRoute","ngResource"])
  .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      })
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "templates/users/users.html"
      })
      .when("/admin", {
        templateUrl: "templates/admin/admin.html"
      })
      .otherwise({
        redirectTo: '/'
      })
  })
