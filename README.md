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

- Callbacks in microtask queue are executed in between execution of timer queue callbacks


## Important

- The order of execution for a IO queue and setTimeout of 0 can never be guarenteed

- ### I/O queue

- I/O events are polled and the callbacks are added only when the I/O is complete
