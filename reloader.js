const { spawn } = require( 'child_process' );

const http = require('http');

// Create an HTTP tunneling proxy
listener = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   let ret = "";
   const reload = spawn( '/bin/sh', [`${__dirname}/reload.sh`] );
   reload.stdout.on('data', (data) => {
      ret += `stdout: ${data}`;
   });

   reload.stderr.on('data', (data) => {
      ret += `stderr: ${data}`;
   });

   reload.on('close', (code) => {
      res.writeHead(code == 0 ? 200 : 500, { 'Content-Type': 'text/plain' });
      res.end(ret);
   });

}).listen(9876);


