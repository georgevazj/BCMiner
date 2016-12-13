'use strict';
angular
	.module('bcminer')
	.controller('adminBlock', blockCtrl);

function blockCtrl(transactionsService, timerService, $log){
	var vm = this;
	vm.header = 'Control del bloque';
	vm.label = 'Duración (mins.)';
	vm.timer = timerService.getTimer()/60;
	vm.timerSubmit = function(){
		timerService.setTimer(vm.timer);
	}
}