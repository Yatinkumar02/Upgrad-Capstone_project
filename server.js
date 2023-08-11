const http = require('http');

const server = http.createServer((request, response) =>{
    console.log('method: ${request.method}');
    console.log('url: ${request.url}');
    
    if(request.url === '/movies'){
        if(request.method === 'GET'){
            response.write( "All Movies Data in JSON format from Mongo DB")
        }
    }

    if(request.url === '/genres'){
        if(request.method === 'GET'){
            response.write( "All Genres Data in JSON format from Mongo DB")
        }
    }

    if(request.url === '/artists'){
        if(request.method === 'GET'){
            response.write( "All Artist Data in JSON format from Mongo DB")
        }
    }

    response.end();
});

const PORT = 9000;
server.listen(9000, () =>{
    console.log('server started on port 9000');
});