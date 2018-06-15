var express = require ('express');
var server = express();

server.use(express.static(__dirname));


server.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

server.get("/",function(req,res){
    res.sendFile(__dirname +"/idriss.html");
});

server.get("/liste",function(req,res){
    res.sendFile(__dirname +"/equipes.json");
});


server.listen(3200);