const EventEmitter = require("events");
const emitter = new EventEmitter();

// register a listener
emitter.on("messageLogged", function () {
  console.log("Listener called");
});

// Raise an event, but not a listener, that handles when that event is raised
emitter.emit("messageLogged");
