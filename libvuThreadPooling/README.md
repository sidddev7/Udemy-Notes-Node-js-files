## Thread Pooling and async operation in libUV

- When there is an async task that needs to be performed, nodejs send the execution order to libuv and libuv creates child threads for that process to be ran on the CPU.

- See the example in the file, if we run the crypto function synchronously, the time taken is way high, as the Node.js execution is blocked due to the sync nature of the function

- See the example in the file, if we run the crypto function asynchronously, in this case, if we increate the MAX calls above 4, we get some degraded performance, this is becuase by default, libuv has thread pool size of 4,

```javascript
node app.js
Started 0
Started 1
Started 2
Started 3
Started 4
Timetaken for 1 298
Timetaken for 0 348
Timetaken for 3 315
Timetaken for 2 325
Timetaken for 4 432
```

https://prnt.sc/tkjXBF7zz-cI

- Now if we increase the thread pool size, we get better performance upto the threads equal to number of cores present in the system CPU

```javascript
node app.js
Started 0
Started 1
Started 2
Started 3
Timetaken for 1 268
Timetaken for 2 273
Timetaken for 0 321
Timetaken for 3 336
```

- But if we increase the threads greater than the number of cores present, then OS scheduler will kick in and start context switching threads in order to execute all the threads equally, which results in higher CPU idle time

- [Image](https://prnt.sc/jWL_UrUkLnvL)

## Summary

- [Image 1](https://prnt.sc/jWL_UrUkLnvL)

- [Image 2](https://prnt.sc/4jlciUvp9BnH)