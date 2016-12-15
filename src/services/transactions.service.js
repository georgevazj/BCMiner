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
		service.TOPIC = "/topic/transactions";
		service.CHAT_BROKER = "/app/messaging";

		var stompClient = null;
		var setConnected = false;

		function connect(){
		    var socket = new SockJS(service.SOCKET_URL);
		    stompClient = Stomp.over(socket);
		    stompClient.heartbeat.outgoing = 5000;
		    stompClient.heartbeat.outgoing = 0;
		    stompClient.connect({},function(frame){
		        setConnected = true;
		        console.log('Conectado: ' + frame);
		        stompClient.subscribe('/topic/transactions',function(transaction){
		            showTransaction(JSON.parse(transaction.body).blockId,JSON.parse(transaction.body).concept,JSON.parse(transaction.body).value);
		        });
		    });
		}


		service.receive = function(){
			return listener.promise;
		};

		service.getStatus = function(){
			return getStatus;
		}

		service.send = function(message){
			var id = Math.floor(Math.random() * 1000000);
			socket.stomp.send(service.CHAT_BROKER,{
				priority: 9
			}, JSON.stringify({
				message: message,
				id: id
			}));
			messageIds.push(id);
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
		connect();
		return service;
	});