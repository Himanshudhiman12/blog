const express = require('express');
var app = express();
bodyParser = require('body-parser')
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blogDB", function (err) { 
   if (err){
       console.log("DB Error: ", err);
       process.exit(1);
   } else {
       console.log('MongoDB Connected');
   }
});
require('./routes/createBlog')(app);
require('./routes/viewBlog')(app);
require('./routes/viewOneBlog')(app);
require('./routes/deleteBlog')(app);
require('./routes/updateBlog')(app);


app.listen(3000 , () => console.log('Example app listening on port 3000!'));
