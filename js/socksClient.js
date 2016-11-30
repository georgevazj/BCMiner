/**
 * Created by jorge on 11/10/2016.
 */
var stompClient = null;

function setConnected(connected) {
    if(connected){
        setTimeout(function(){
            $("#statusOK").slideDown();
        },1000);
    }
}

function connect(){
    var socket = new SockJS('http://localhost:8080/messaging/');
    stompClient = Stomp.over(socket);
    stompClient.heartbeat.outgoing = 5000;
    stompClient.heartbeat.outgoing = 0;
    stompClient.connect({},function(frame){
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/transactions',function(transaction){
            showTransaction(JSON.parse(transaction.body).blockId,JSON.parse(transaction.body).concept,JSON.parse(transaction.body).value);
        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

function sendContract() {
    var concepts = [' marriage contract',
                    ' land adquisition',
                    ' Real Madrid contract',
                    ' mortgage'];
    setInterval(function(){
        stompClient.send("/app/transaction", {}, JSON.stringify({'concept': chance.name() + chance.pickone(concepts),'value':chance.integer({min: 1,max:100})}));
    },$("#contractsIntervalVal").text() * 1000);
}

function sendShoppings(){
    var concepts = [' Ferrari Enzo',
        ' PlayStation 4',
        ' Empire State Building',
        ' yacht'];
    setInterval(function(){stompClient.send("/app/transaction", {}, JSON.stringify({'concept':chance.pickone(concepts),'value':chance.integer({min: 1,max:20})}));
    },$("#shoppingsIntervalVal").text() * 1000);
}

function sendServices(){
    var concepts = ['Bridge construction ',
        'IT project ',
        'BBVA hq construction ',
        'New York World Trade Center design '];
    setInterval(function(){stompClient.send("/app/transaction", {}, JSON.stringify({'concept': chance.pickone(concepts),'value':chance.integer({min: 1,max:200})}));
    },$("#servicesIntervalVal").text() * 1000);
}

function showTransaction(blockid,concept,value) {
    $("#transactionsBody").append("<tr><td>" + concept + "<td>" + value + " <i class=\"fa fa-btc\"/></td></tr>");
    $("#block").text(blockid);
}

$(function () {
    $("#statusOK").hide();
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#applyContracts" ).click(function() { sendContract(); });
    $( "#applyShoppings" ).click(function() { sendShoppings(); });
    $( "#applyServices" ).click(function() { sendServices(); });
    $( "#statusButton").click(function(){
        $("#statusOK").slideUp();
    });
    $("#blockTimerApply").click(function(){
        console.log($("#blockTimerVal").text());
    });
    window.onbeforeunload = disconnect();
});