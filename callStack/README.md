# Event Loop and Threading

## Event Loop

### Scenario: - 

- When you try to run an infinite loop in browser, the webpage becomes unresponsive, this is because the main thread is in infinite loop which makes the webpage not able to respond to the user actions
Solution - 

- Node.js is indeed single-threaded, which means it executes its operations using a single main thread. However, it achieves asynchronous processing through a programming concept called "event loop" and non-blocking I/O operations.

- The event loop is at the core of Node.js's asynchronous model. When Node.js starts executing a program, it initializes the event loop, which continuously checks for pending asynchronous operations, such as reading files, making network requests, or handling timers. Instead of waiting for these operations to complete, Node.js registers callbacks for each of them and continues executing the rest of the code.

- When an asynchronous operation is completed, the associated callback is added to a queue by the operating system. The event loop, during its next iteration, picks up these callbacks and executes them one by one. This way, Node.js can handle multiple operations concurrently without blocking the main thread. If an operation takes longer to complete, it doesn't hinder the execution of other tasks.

- For example, if you have a Node.js server that receives multiple requests simultaneously, it can process them concurrently using the event loop, even though it runs on a single thread. This makes Node.js particularly well-suited for handling I/O-heavy tasks, like serving web requests or accessing databases.

- It's important to note that while Node.js is single-threaded, it can take advantage of multi-core systems by creating child processes that run in separate threads. These child processes can be used to distribute the workload and achieve better performance when handling CPU-intensive tasks. Additionally, worker threads were introduced to Node.js, allowing developers to execute JavaScript code in separate threads, although the main event loop remains single-threaded.

- Overall, Node.js's asynchronous model, powered by the event loop and non-blocking I/O operations, enables it to efficiently handle concurrent tasks despite being single-threaded.

- So there is a limit of call stack that could be filled, normally around 11k in size


- So as per the scenario, if you wrap the function in event callbacks, like settimeout of 0 seconds, the webpage will not freeze at all because the task queue will only send the function to the call stack once it is empty
