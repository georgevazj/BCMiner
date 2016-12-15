'use strict';
angular
	.module('bcminer')
	.controller('socksAlert', socksAlert);

function socksAlert(transactionsService, $timeout) {
	var vm = this;
	vm.status = true;
}