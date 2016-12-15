'use strict';
angular
	.module('bcminer')
	.directive('usersTransactions', usersTransactions)
	.directive('usersBlock', usersBlock)
	.directive('usersControls', usersControls)
	.directive('usersJumbo', usersJumbo)

function usersTransactions(){
	return {
		restrict: 'E', // Hace referencia a un elemento/etiqueta
	  	templateUrl: 'templates/users/transactionsPanel.html'
	};
}

function usersBlock(){
	return {
		restrict: 'E', // Hace referencia a un elemento/etiqueta
	  	templateUrl: 'templates/users/blockPanel.html'
	};
}

function usersControls(){
	return {
		restrict: 'E', // Hace referencia a un elemento/etiqueta
	  	templateUrl: 'templates/users/controlsPanel.html'
	};
}

function usersJumbo(){
	return {
		restrict: 'E', // Hace referencia a un elemento/etiqueta
	  	templateUrl: 'templates/users/jumboPanel.html'
	};
}