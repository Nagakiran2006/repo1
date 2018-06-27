const express = require('express');
const app = express();
const message = require('./message');
let all_letters = '';
console.log(message["letters"]);
let a = message.add(5,6);
console.log("total is ", a);

app.get("/users/:name",function(req,res){
res.send(req["params"]["name"]);

})
    
app.listen(8000,function(e){
    if(e == true)
        console.log(e);
        else
        console.log("application running on port 8000");
        
    
})
