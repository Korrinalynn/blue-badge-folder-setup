let router = require('express').Router();
//localhost:3001/calculator/add
router.post("/add", function(req, res){
    let number1 = req.body.num1;
    let number2 = req.body.num2;

    let total = Number(number1) + +number2;

    res.json({total: total});
});

module.exports = router;