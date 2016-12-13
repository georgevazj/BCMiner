'use strict';
angular
	.module('bcminer')
	.service('timerService', function(){
		var timer = 300;
		this.getTimer = function(){
			return timer;
		}
		this.setTimer = function(time){
			console.log(time*60)
			timer = time*60;
		}
	});