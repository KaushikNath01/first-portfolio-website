// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req,res) => {
//     if(req.url == '/'){
//         fs.readFile('index.html', 'utf-8', (err,data) => {
//             if(err){
//                 console.error(err)
//             }else{
//                 res.end(data)
//             }
//         })
//         // fs.readFile('./assets/css/main.css', 'utf-8', (err,data) => {
//         //     if(err){
//         //         console.error(err)
//         //     }else{
//         //         res.end(data.toString())
//         //     }
//         // })
//     }else if(req.url == '/about'){
//         fs.readFile('about.html', 'utf-8', (err,data) => {
//             if(err){
//                 console.error(err)
//             }else{
//                 res.end(data)
//             }
//         })
//     }else{
//         res.writeHead(404)
//         res.end('<h1>404 error page not found</h1>')
//     }
// })

// server.listen(7000, '127.0.0.1', () => {
//     console.log('listening');
// })

// const url = require('url');
// const fs = require('fs');


// if()
