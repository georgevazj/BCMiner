'use strict';
angular
	.module('bcminer')
	.directive('navBar', navBar)

function navBar(){
	return {
		restrict: 'E',
		templateUrl: 'templates/common/nav.html'
	}
}