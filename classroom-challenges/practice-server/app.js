let express = require("express");
let testController = require('./controllers/testcontroller');
let calculatorcontroller = require("./controllers/calculatorcontroller");
let app = express();
app.use(express.json());

app.use("/test", testController);
app.use('/calculator', calculatorcontroller);

app.listen(3001, function () {
  console.log("App is listening on port 3001");
});

