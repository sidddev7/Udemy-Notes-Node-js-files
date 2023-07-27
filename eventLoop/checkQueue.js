setImmediate(() => console.log("Called setImmediate 1"));
setImmediate(() => {
  console.log("Called Immediate 2");
  process.nextTick(() => console.log("Called nextTick inside immediate"));
  Promise.resolve().then(() => console.log("Called Promise indside immediate"));
});

setImmediate(() => {
  console.log("Called Immediate 3");
});
