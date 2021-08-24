require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db')

let logbook = require("./controllers/logbookcontroller");
let user = require("./controllers/usercontroller")

sequelize.sync();
app.use(require('./middleware/headers'));

app.use(express.json());

app.use("/user", user);

app.use('/log', logbook);

app.listen(3004, function(){
    console.log("App is listening on port 3004");
});