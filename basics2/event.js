const EventEmitter = require("events");
const event = new EventEmitter();

event.on("greet", () => {
  console.log("Hello, this is a custom event!");
});

event.emit("greet");
