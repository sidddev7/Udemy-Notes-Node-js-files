const EventEmitter = require("events");

const events = new EventEmitter();
events.on("order-pizza", (data) => {
  console.log("Baking your", data.pizza, "of size", data.size);
});
events.on("order-pizza", (data) => {
  console.log("You got complimentry drink");
});
console.log("Before emitting");
events.emit("order-pizza", { pizza: "7 inch marghretta", size: "large" });
console.log("After emitting");
