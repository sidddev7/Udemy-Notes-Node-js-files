const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// listners should be defined first, becuase the event emitter will register the listners, and then emit them, if we define the listners after the emitter, node.js would not be able to handle the listeners, as the event emitter is a synchrouised
eventEmitter.on("message", (data) => {
  console.log("Called Message emitter", data);
});


eventEmitter.emit("message", {
  title: "Hello",
  body: "Testing the event emitters",
});
