const http = require('http')
const data = JSON.stringify({
    title : "MEAN Stack"
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST', //GET, POST, DELETE, PUT
    headers: {
        'Content-type' : 'application/json',
        'Content-Length' : data.length
    }
}

const request = http.request(options, response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    })
})

request.on('error', error => {
    console.log(error);
})

request.end();