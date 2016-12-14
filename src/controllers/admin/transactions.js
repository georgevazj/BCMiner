'use strict';
angular
	.module('bcminer')
	.controller('adminTransactions', transactionsCtrl);

function transactionsCtrl(transactionsService){
	var vm = this;
	vm.header = 'Transacciones';
	vm.label = 'Intervalos (segs.)';

	vm.contracts = 30;
	vm.shopping = 5;
	vm.services = 10;

	vm.contractsSubmit = function(){
		transactionsService.send(vm.contracts);
		console.log(vm.contracts);
	}

	vm.shoppingSubmit = function(){
		console.log(vm.shopping);
	}

	vm.servicesSubmit = function(){
		console.log(vm.services);
	}

}