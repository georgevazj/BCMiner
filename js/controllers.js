angular.module("bcminer")
  .controller("MainController", function($scope,$rootScope, $http){
    $rootScope.mainTitle = "BlockChain Miner";
    $scope.brand = "Simulador de BlockChain";
    $scope.left = "Transacciones actuales";
    $scope.middle = "Bloque de transacciones"
    $scope.right = "Controles";
    $scope.jumbo = "Cadena de bloques";

    $scope.init = function(){
    	console.log('Hola mundo!');
    }
  })
.