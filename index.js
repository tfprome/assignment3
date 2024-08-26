const http= require('http')
const fs=require('fs')
const port=5500





const server = http.createServer((req, res) => {
    if (req.url == '/about') {
       res.end('This is the About Page.');
    }
    else if (req.url == '/contact') {
        res.end('This is the Contact Page.');
    }
    else if(req.url=='/'){
        res.end('This is the Home Page');
    } 
    else if(req.url=='/file-write'){
        fs.writeFile('demo.txt',"hello world",(err)=>{
            if(!err)
              res.end("message written")
            else
              res.end('message could not be written')
        })
    }
});

server.listen(port, () => {
    console.log(`Server running at:${port}`);
});
