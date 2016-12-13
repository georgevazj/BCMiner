'use strict';
angular
	.module('bcminer')
	.controller('adminTransactions', transactionsCtrl);

function transactionsCtrl(transactionsService){
	this.header = 'Transacciones';
	this.label = 'Intervalos (segs.)';

	this.contracts = 30;
	this.shopping = 5;
	this.services = 10;

	this.contractsSubmit = function(){
		console.log(this.contracts);
	}

	this.shoppingSubmit = function(){
		console.log(this.shopping);
	}

	this.servicesSubmit = function(){
		console.log(this.services);
	}

}