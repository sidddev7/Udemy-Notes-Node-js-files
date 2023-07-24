console.log("Starting");
setTimeout(() => {
  console.log("Stopping");
}, 2000);

// setInterval(() => {
//   console.log("Interval after 2000 miliseconds");
// }, 2000);

// setTimeout(() => {
//   console.log("immediate");
// }, 0);

// console.log("Stopping Async");

const request=require("postman-request")

const url="http://api.weatherstack.com/current?access_key=8ec873edc0b5a1970eeae9a2c3e3129d&query=Surat"

request(url,(err,res)=>{
  console.log("Called",res)
})