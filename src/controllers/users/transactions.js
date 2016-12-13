'use strict';
angular
	.module('bcminer')
	.controller('usersTransactions', transactionsCtrl);

function transactionsCtrl(transactionsService){
	this.header = 'Transacciones';
	this.col1 = 'Concepto';
	this.col2 = 'Valor';

	this.transactions = [];
	transactionsService.receive().then(null, null, function(transaction) {
		this.transactions.push(transaction);
	});
	
}