'use strict';
angular
	.module('bcminer')
	.controller('Block', block);

function block(){
	this.header = 'Bloque en curso';
}