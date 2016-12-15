'use strict';
angular
	.module('bcminer')
	.directive('adminTransactions', adminTransactions)
	.directive('adminBlock', adminBlock)
	.directive('timerBlock', timerBlock)

function adminTransactions(){
	return {
		restrict: 'E',
		templateUrl: 'templates/admin/transactionsPanel.html'
	}
}

function adminBlock(){
	return {
		restrict: 'E',
		templateUrl: 'templates/admin/blockPanel.html'
	}
}

function timerBlock(){
	return {
		restrict: 'E',
		templateUrl: 'templates/admin/blockTimer.html'
	}
}