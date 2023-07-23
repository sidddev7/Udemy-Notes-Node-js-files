const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drink");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

drinkMachine.addListener("drink", (data) => {
  console.log("serve complementary drink", data.size);
});
drinkMachine.addListener("order", () => {
  console.log("serve complementary drink");
});

pizzaShop.on("order", (data) => {
  drinkMachine.emit("drink", { size: data.size });
});

pizzaShop.order("large", "cheese");
pizzaShop.displayOrderNumber();
