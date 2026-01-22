const http = require('http');


let db;
const connectionString = "mongodb+srv://Ray:iTQuqu9ZXhl3oKmu@cluster0.hxtq0nl.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0"
const mongodb = require("mongodb")

mongodb.connect(connectionString, {
    useNewUrlParser:true, 
    UseUnifiedTopology:true
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MogoDB connection succed");
        module.exports = client
        const app = require("./app.js");
        const  server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
        console.log(`The server is runing succesfuly on port: ${PORT}, http://localhost:${PORT}`)
        });
    }
})


