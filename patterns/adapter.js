//adapter pattern
//connect different interfaces

//universal plug
function Plug() {
    this.plug = function () {
        console.log("Plug");
    }
}

//universal socket
function Socket() {
    this.socket = function () {
        console.log("Socket");
    }
}

//adapter
function Adapter() {
    this.plug = function () {
        var socket = new Socket();
        socket.socket();
    }
}

//client
var plug = new Plug();
plug.plug();

var adapter = new Adapter();
adapter.plug();

