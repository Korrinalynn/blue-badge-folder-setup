let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const logbook = require('../db').import('../models/logbook');


router.get('/practice', function(req, res){
    res.send("This is a practice route.");
});

router.post('/', validateSession, (req, res) => {
    const logbookEntry = {
        description: req.body.logbook.description,
        definition: req.body.logbook.definition,
        result: req.body.logbook.result,
        owner: req.user.id
    }
    logbook.create(logbookEntry)
    .then(logbook => res.status(200).json(logbook))
    .catch(err => res.status(500).json({error: err}))
})

router.get("/", (req, res) => {
    logbook.findAll()
    .then(logbooks => res.status(200).json(logbooks))
    .catch(err => res.status(500).json({ error: err}))
});

router.get("/:id", validateSession, (req, res) => {
    let userid = req.user.id
    logbook.findAll({
        where: { owner: userid }
    })
    .then(logbook => res.status(200).json(logbook))
    .catch(err => res.status(500).json({error: err}))
});

router.put("/:id", validateSession, function(req, res) {
    const updateLogbookEntry = {
        description: req.body.logbook.description,
        definition: req.body.logbook.definition,
        result: req.body.logbook.result
    };

    const query = { where: { id: req.params.entryId, owner: req.user.id} };

    logbook.update(updateLogbookEntry, query)
    .then((logbooks) => res.status(200).json(logbooks))
    .catch((err) => res.status(500).json({ error: err}));
});

router.delete("/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id } };

    logbook.destroy(query)
    .then(() => res.status(200).json({ message: "Logbook Entry Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;