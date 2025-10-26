const EventEmitter = require("events");

// Raise an event, but not a listener, that handles when that event is raised
const Logger = require("./logger");
const logger = new Logger();

// register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
