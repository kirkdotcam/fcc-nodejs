var http=require('http');
var fs=require("fs");
var map=require("through2-map");

var server=http.createServer(function(req,res){
    //req.setEncoding('utf8');
    if(req.method =='POST'){
        req.pipe(map(function(chunk){
                return chunk.toString().toUpperCase();
            })).pipe(res);
    }
})
server.listen(process.argv[2]);
