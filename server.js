// const { error } = require('console');
const http = require('http');
const url = require('url');
const fs = require('fs'); // fs - file system, vajalik failide lugemiseks
const port = 3000;

const  server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;
    console.log(requestUrl);

    if(requestUrl ==='/') {
        fs.readFile('index.html', (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`Error. File not found.`);
            }
            else {
                response.writeHead(200);
                response.write(fileContent);
            }
            response.end();
        });

    } else if(requestUrl === '/about') {
        fs.readFile('about.html', (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`Error. File not found.`);
            }
            else {
                response.writeHead(200);
                response.write(fileContent);
            }
            response.end();
        });
    } else if(requestUrl === '/contact') {
        fs.readFile('contact.html', (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`Error. File not found.`);
            }
            else {
                response.writeHead(200);
                response.write(fileContent);
            }
            response.end();
        });

    } else {
        response.writeHead(404);
        response.write(`Error. ${requestUrl} page not found.`);
        response.end();
    }
   
} );

// Cmd + C sulgeb serveri


server.listen(port, error => {
    if(error){
        console.log(error);
    } else {
        console.log(`server is listening on port ${port}.`);
    }

});