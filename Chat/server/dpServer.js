const Deepstream = require('deepstream.io');
var server = new Deepstream({port:3000})
server.start()
server.on("started",()=>console.log("Chat Server started"))
