const promise1 = Promise.reject(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "error");
});

const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((res) => {
    console.log("All Promises ===>Rejects if any one is rejected", res);
  })
  .catch((err) => {
    console.error("All promise reject", err);
  });

Promise.allSettled(promises)
  .then((res) => {
    console.log(
      "All settled Res ====> Logs every promise rejected or fulfilled",
      res
    );
  })
  .catch((err) => {
    console.log("AllSettled promise reject", err);
  });
Promise.race(promises)
  .then((res) => {
    console.log(
      "Race promises ===>Resolves when any of the provided Promises are resolved or rejected",
      res
    );
  })
  .catch((err) => console.log("Race promise rejected", err));
Promise.any(promises)
  .then((res) => {
    console.log(
      "Any Promise ====>Resolves when any one is resolved, rejects if none",
      res
    );
  })
  .catch((err) => {
    console.log(
      "Error:Any Promise ====>Resolves when any one is resolved, rejects if none",
      err
    );
  });

// Call method starts
function salutationFn(greet, punctuation) {
  console.log(`${greet} ${this.name} ${punctuation}`);
}

const person = {
  name: "John",
  age: 25,
};

salutationFn.call(person, "Hello", "!");
// Call method ends

// Apply method starts
salutationFn.apply(person, ["Hi", "!"]);
// Apply method starts

// Bind method starts
const greetFn = salutationFn.bind(person, "Hola");
greetFn("!");
// Bind method ends

// Rest operators
const addition = (...abc) => {
  console.log(abc);
};
addition(1, 2, 3);

// Spread Operators
const additiona = (...abc) => {
  console.log(abc);
};
additiona(...[1, 2, 4]);
