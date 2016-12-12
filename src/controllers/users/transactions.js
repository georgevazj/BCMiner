angular
	.module('bcminer')
	.controller('Transactions', transactions);

function transactions(){
	this.header = 'Transacciones';
	this.col1 = 'Concepto';
	this.col2 = 'Valor';
	
}