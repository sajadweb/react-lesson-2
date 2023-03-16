var events = require("events");
var eventEmitter = new events.EventEmitter();

//Assign the eventhandler to an event:
eventEmitter.on("new post", function (post) {
  console.log("save in db", post);
});

//Fire the 'scream' event:
setTimeout(()=>{
	eventEmitter.emit("new post", { title: "post new" });
},3000)
