'use strict';
angular
	.module('bcminer')
	.controller('usersBlock', block);

function block(){
	this.header = 'Bloque en curso';
}