'use strict';
angular
	.module('bcminer')
	.controller('usersControl', control);

function control(){
	this.header = 'Controles';
	this.hashAddon = 'HASH';
	this.nonceAddon = 'NONCE';
	this.leftbtn = 'CALCULAR';
	this.rightbtn = 'ENVIAR'

	this.getNonce = function(){
		this.nonce = Math.floor(Math.random() * 9999) + 1000;
	}
	this.send = function(){

	}
}