'use strict';
angular
	.module('bcminer')
	.service('transactionsService',function($q, $timeout){
		var service = {}, listener = $q.defer(), socket = {
			client: null,
			stomp: null
		}, messageIds = [];

		service.RECONNECT_TIMEOUT = 30000;
		service.SOCKET_URL = 'http://localhost:3000/messaging';
		service.CHAT_TOPIC = "/topic/transactions";
		service.CHAT_BROKER = "/app/messaging";

		service.receive = function(){
			return listener.promise;
		};

		var reconnect = function(){
			$timeout(function(){
				initialize();
			}, this.RECONNECT_TIMEOUT);
		};

		var getMessage = function(data) {
			var message = JSON.parse(data), out = {};
			out.message = message.message;
			return out;
		};

		var startListener = function() {
			socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
				listener.notify(getMessage(data.body));
			});
		};

		var initialize = function() {
			socket.client = new SockJS(service.SOCKET_URL);
			socket.stomp = Stomp.over(socket.client);
			socket.stomp.connect({}, startListener);
			socket.stomp.onclose = reconnect;
		};

		initialize();
		return service;
	});