const EventEmitter = require("events");
const emitter = new EventEmitter();

// register a listener
emitter.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

// Raise an event, but not a listener, that handles when that event is raised
emitter.emit("messageLogged", { id: 1, url: "http://" });

// Raise: logging (data: message)
emitter.on("loggingEvent", (arg) => {
  console.log("Logger: ", arg);
});

emitter.emit("loggingEvent", { id: 1, logging: "error message" });
