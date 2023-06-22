const http = require('http');

const port = 3000;

http.createServer((req, res) =>{
    let chunks = [];  
    let { url } = req;
    // this is a readable stream  
    req.on("data",(chunk)=>{
        chunks.push(chunk);
    });
    req.on("end",()=>{
        const body = {
            url: req.url,
            method: req.method
        };
        const wildcard = {
            wild: "card",
            wacky: true
        }
        const about ={
            name: "joshua",
            stressed: true
        }

        //wild card route
        if(url === "/"){
            res.write(JSON.stringify(wildcard));
        }
        else if(url === "/about"){
            res.write(JSON.stringify(about));
        }
        else if(url === "/echo"){
            res.write(JSON.stringify(body));
        }
        res.end();
        
    });
})
.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});


