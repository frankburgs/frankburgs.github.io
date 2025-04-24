- The async function is wrapped in a promise, which is dependent on the await.

``` js
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const distPath = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {

  let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);

  // MIME types for different file extensions
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
  };

  // Set default content type to HTML
  let contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {

    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>'); 
      } 
      else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } 
    else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

# Practice inventory tracking server

``` js
import http from 'node:http';
import { myFunction } from './qty.js'; // Returns an array containing quantities of each item #.

const hostname = '127.0.0.1';
const port = 3000;

const fileCount = myFunction();

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*'); // Or else CORS error.
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('75');// Send the response body.
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

# text files of quantities

``` js
// This file creates an array containing all the quantities held in each txt file.

import fs from 'node:fs';
import path from 'node:path'

export function myFunction(){
  let fileCount = 0;
  const directorypath = 'C:/Users/franc/OneDrive/Desktop/fabrication/server/fasteners';
  
  fs.readdir(directorypath, (err, files) => { // Use the readdir function of the file system (node:fs) module.

    if (err) throw err;

    files.forEach(file => {

      const filepath = path.join(directorypath, file);

      fs.readFile(filepath, 'utf8', (err, data) => {

        if (err) throw err;
        else{
          fileCount++;
        }
      });
    })
  })
  return fileCount;
}
```