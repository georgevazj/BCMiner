'use strict';
angular
	.module('bcminer')
	.controller('adminBlock', blockCtrl);

function blockCtrl(transactionsService){
	this.header = 'Control del bloque';
	this.label = 'Duración (mins.)';

	this.timer = 5;

	this.timerSubmit = function(){
		console.log(this.timer * 60);
	}

}