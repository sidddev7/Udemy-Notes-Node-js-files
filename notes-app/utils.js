console.log("utils.js");

const name = "Siddhraj";

const logger = () => {
  console.log(name);
};
const sum = (a, b) => {
  return a + b;
};

module.exports = { logger, sum };
