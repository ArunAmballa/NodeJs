var http=require('http')
http.createServer((request,response)=>{
    response.write("Welcome Node Js")
    response.end()
}).listen(3000)