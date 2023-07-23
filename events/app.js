const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


eventEmitter.on("message", (data) => {
  console.log("Called Message emitter", data);
});


eventEmitter.emit("message", {
  title: "Hello",
  body: "Testing the event emitters",
});
