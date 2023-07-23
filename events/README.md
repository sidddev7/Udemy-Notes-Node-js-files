# Event Emitters

Nodejs provides us a module names as events that can be used to trigger some sort of processing once an event has occured

### out of the box example

```javascript
const btn=document.querySelector("btn");
btn.addEventListener("click",()=>console.log("Do something..."));

```
here the add event listner is the event listner, here for click event on the button

## example in the file

EventEmitter is a class implementation in nodejs from which we can create event objects and work on it

```javascript
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("message", (data) => {
  console.log("Called Message emitter", data);
});


eventEmitter.emit("message", {
  title: "Hello",
  body: "Testing the event emitters",
});

```
#### Note : - Event listners should be always created before emiting its events, this is because the event emitter is synchronized in nature, thus node.js will not try to execute the lines below the event emitter before completing that job, thus the event emits before the listner has been registered. 