const EventEmitter = require("events");

class DrinkMachine extends EventEmitter {
  constructor() {
    super();
    this;
  }
  createDrink(size) {
    console.log("Serving complementary drink of size", size);
  }
}

module.exports = DrinkMachine;
