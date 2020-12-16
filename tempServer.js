const http = require("http");//nodejs package no need to install

const server = http.createServer((req, res)=>{
    const { method, url } = req
    // peek at token which was sent from client as Authorization: tokenValue
    // console.log(req.headers.authorization);

    // read stream from req.body
    // let reqBody = []
    // req.on("data", d => {
    //     reqBody.push(d).on("end", () => reqBody = Buffer.concat(reqBody).toString());
    // })
    // console.log(reqBody);

    // res.statusCode = 500;
    // res.statusCode = 400;
    // res.statusCode = 300;
    res.statusCode = 200;

    // res.setHeader("Content-Type", "text/html");
    // res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("X-Powered-By", "Node");

    // res.write("Welcome!");
    // res.write("<h1>Welcome!</h1>");
    res.write(JSON.stringify({greetings: "Welcome!"}));

    res.end();

})

const PORT = 5000;
server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


