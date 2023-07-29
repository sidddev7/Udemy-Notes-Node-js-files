# Javascript Interview
### Introduce yourself
### Javascript projects

## Questions:
### Is javascipt Single threaded or multi threaded? it is single threaded
### How does it handle async operations: -  
- Javascript uses Event loops, call backs, that are executed back to the call stack once the callbacks are ready to be executed 
### How does javascript know when to execute the call backs?

- It uses the event loop to check which call back is ready to be executed, like settimeout will be available after the delay is completed and it is pushed to the event queue, which is connected to the event loop, event loop continuously checks for the event queue and call stack, once the call stack is empty after executing whole program, event loop pushed the first priority callback to the call stack to be executed,

- It prioritizes the calls as discussed in the libUV directory, first process.nextTick(), then Promises, then timer queue, then I/O queue then check queue, and then close queue

### What is Promises?
- It is used to observe for the async call and functions that are executing, promise provides methods like resolve and reject, which subscribes to the calling function and provide .then and .catch methods
### Explain Promise.all() and Promise.allSettled() 
- They are are two methods, 
    - Promise.all():
        - If there are several promises lined up, and if anyone of them is rejected while executing, then the Promise.all() will be rejected
    - Promise.allSettled() :
        - If there are several promises lined up, Promise.allSettled() will return an array of results containing the reference to all the Promises executed stating whether it has resolved or rejected

### What are event Emitters?
- Event emitters is a functionality that can emit events in the application, which can be listened by a subscriber to that kind of event and execute the defined callbacks
### What do you mean by Publisher and subscriber?
- Publisher is that part of code that is used to emit the events to the application
- Subscriber is that part that registers a listner to the events emitted

### How to optimize the application
- We can use caching and memoizing the application for extensive calculation functions.
- use of break, continue, goto, in loops.
- Web workers that can execute the async codes.
- avoid using global variables, use function scoped to avoid memory leaks
- clear the async functions that are required, like clearInterval

### what do you understand by Call,bind and apply in vanilla javascript?
- bind: - it created a new function, has its this keyword set to the provided values.
example : - 
```javascript
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'
```
- Call() & apply() method: 
    `call()` calls a function with a given `this` keyword and arguments provided individually.
    `apply()` expects an array of all of the parameters

### Example:
```javascript
    var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
```

### What do you mean by `const` objects and `Object.freeze()`?
- when using const to create object, we cannot reassign to that variable again, but we can mutate the existing object if required
- When using `Object.freeze()`, we cannot mutate the existing object




## Javascript and Node.js

- Javascript is a synchronous, blocking and single threaded language
- which cannot be used to write fast and scalable apps
- So browser and nodejs have some built in api functionality to let the code run asynchronously, not waiting for the code to complete, and instead register a callback with the function, thus the main thread is not blocked

- [Image](https://prnt.sc/0O262PrLRgSo)

- To make the exection async, we use LibUV

- V8 engine consist of Memory heap and one Call stack

```
    console.log("First)
    console.log("Second")
    console.log("Third")
```
[For async Execution](https://prnt.sc/HJXEO6FW3Von)

[Event Loop](https://prnt.sc/xmkCxv9lgsjI)


- Event loop has a set of execution pattern that follows
- Refer the image above

1. Microtask queue is executed first, first the task in nextTick are executed, then promise queue is executed
2. all task from timer queue is executed
3. then again microtask queue is executed if present, then nextTick is executed, then promise queue is executed
4. then IO queue is executed
5. again microtask queue
6. ckeck queue is executed
7. microtask queue is executed
8. close queue is executed
9. microtask queue is executed

Some conclusions: - 

- Only when the Call stack is Empty, the event loop comes into picture to run the callbacks
- Settimeout and setinterval are given the priority
- Timer callbacks are given the priority then the I/O operations