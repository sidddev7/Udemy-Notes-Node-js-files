// Callback functions
// A function can be passed as an argument to the function,
// A function can also be returned as values from other functions

function greet(name) {
  console.log("Hello ", name);
}

function greetSiddhraj(callBack) {
  const name = "Siddhraj";
  callBack(name);
}

greetSiddhraj(greet);

// Two types of Callbacks
// Asynchronous callbacks , fs.writeFile("./notes","Hello",()=>{callback here})
// Synchronous callbacks , [1,2,3,4,5,6,7,8,9].map(item => item*2)

