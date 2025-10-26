const EventEmitter = require("events");
const url = "http://mylogger.io/log";

class logger extends EventEmitter {
  log(message) {
    // send a http request
    console.log(message);
    // raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = logger;
