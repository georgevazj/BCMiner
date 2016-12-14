'use strict';
angular
	.module('bcminer')
	.controller('adminTimer',timerCtrl);

function timerCtrl(transactionsService, timerService, $timeout){
	var vm = this;
	vm.header = 'Cronómetro';
}

