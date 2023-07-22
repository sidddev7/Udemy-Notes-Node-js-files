console.log("Starting");
setTimeout(() => {
  console.log("Stopping");
}, 2000);

// setInterval(() => {
//   console.log("Interval after 2000 miliseconds");
// }, 2000);

setTimeout(() => {
  console.log("immediate");
}, 0);

console.log("Stopping Async");
