'use strict';
angular
	.module('bcminer')
	.controller('usersJumbo', jumbo);

function jumbo(){
	this.header = 'Cadena de bloques';
	this.content = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
}