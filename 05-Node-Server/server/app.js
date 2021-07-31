let express = require('express');
let app = express();
let sequelize = require('./db')

let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller")
// app.use('/test', function(req,res){
//     res.send("This is a message from the test endpoint on the server.");
// });

// app.use('/korrina', function(req,res){
//     res.send("My name is Korrina Shaw and I am 24 years old.");
// });

//have endpoint of journal/practice
//send a response from that endpoint (this is a practice route)
sequelize.sync();

app.use(express.json());

app.use('/journal', journal);
app.use("/user", user);

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});