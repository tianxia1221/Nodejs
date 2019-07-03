var http = require('http');
var fs = require('fs');
var url = require('url');

var express = require('express');
var app = express();

app.use(express.static(__dirname)); 


app.get('/index.html', function (request, response) {
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
      // 输出请求的文件名
      console.log("Request for " + pathname + " received.");
      console.log("__dirname for " + __dirname );
      
      // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP 状态码: 200 : OK   
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 响应文件内容
         response.write(data.toString());		
      }
      //  发送响应数据
      response.end();
   });   
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})