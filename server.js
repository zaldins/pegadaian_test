var express     = require('express'),
                    app = express(), 
                    port = process.env.PORT || 3000, 
                    bodyParser  = require('body-parser'), 
                    controller  = require('./controller');

var route = require('./route');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

route(app);

app.listen(port);

console.log('Server is running on port : ' + port);