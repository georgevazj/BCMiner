'use strict';
angular
	.module('bcminer')
	.directive('socksStatus', socksStatus)

function socksStatus(){
	return {
		restrict: 'E',
		templateUrl: 'templates/common/socksStatus.html'
	}
}