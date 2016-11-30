angular.module("bcminer")
  .controller("MainController", function($scope,$rootScope, $http){
    $rootScope.mainTitle = "BlockChain Miner";
    $scope.brand = "Simulador de BlockChain"
  })
