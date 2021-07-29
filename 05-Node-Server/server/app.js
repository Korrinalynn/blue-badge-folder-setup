let express = require('express');
let app = express();

let journal = require("./controllers/journalcontroller");
// app.use('/test', function(req,res){
//     res.send("This is a message from the test endpoint on the server.");
// });

// app.use('/korrina', function(req,res){
//     res.send("My name is Korrina Shaw and I am 24 years old.");
// });

//have endpoint of journal/practice
//send a response from that endpoint (this is a practice route)
app.use('/journal', journal);

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});