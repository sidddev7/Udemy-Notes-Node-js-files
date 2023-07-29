// next tick function

// console.log("Called 1");
// setTimeout(() => {
//   console.log("Called settimeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise Called");
// });
// process.nextTick(() => {
//   console.log("Called NextTick");
// });
// console.log("Called 2");

setTimeout(() => console.log("Called 1"), 0);
setTimeout(() => console.log("Called 2"), 0);
setTimeout(() => {
  process.nextTick(() => {
    console.log("next tick inside setTimeout");
  });
}, 0);
setTimeout(() => console.log("Called 3"), 0);
process.nextTick(() => console.log("Called next tick 1"));
process.nextTick(() => {
  console.log("Called next tick 2");
  process.nextTick(() => console.log("Called inner nexttick"));
});

process.nextTick(() => console.log("Called next tick 3"));

Promise.resolve().then(() => {
  console.log("Promise 1 Called");
});

Promise.resolve().then(() => {
  console.log("Promise Called 2");
  //   Promise.resolve().then(() => {
  //     console.log("Promise inner called");
  //   });
  process.nextTick(() => console.log("Promise inner nextTick called"));
});
Promise.resolve().then(() => {
  console.log("Promise 3 Called");
});
