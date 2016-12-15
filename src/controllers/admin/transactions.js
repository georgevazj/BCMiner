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
		transactionsService.sendContracts(vm.contracts);
		console.log(vm.contracts);
	}

	vm.shoppingSubmit = function(){
		transactionsService.sendShoppings(vm.shopping);
		console.log(vm.shopping);
	}

	vm.servicesSubmit = function(){
		transactionsService.sendServices(vm.services);
		console.log(vm.services);
	}

}