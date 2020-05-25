var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

app.get('/', function(request, response){    
    response.sendFile(__dirname + '/public/index.html');
});
 
app.listen(3000, function(){
    console.log('Server running at port 3000: http://localhost:3000');
});