const http = require('http');
const server = http.createServer((request,response)=>{
    if(request.url === '/'){
        request.write('khi everyone! its from node js'):
        request.end();
    }
    else{
        response.write('use another domain');
        response.end();
    }
    // response.write('hellow world from modejs');
    // response.end();
});

server.listen('3000');

