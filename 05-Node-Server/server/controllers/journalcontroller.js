let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const journal = require('../db').import('../models/journal');

router.get('/practice', validateSession,function(req, res){
    res.send("This is a practice route.");
});

router.post('/create', validateSession, (req, res) => {
    const journalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
        owner: req.user.id
    }
    journal.create(journalEntry)
    .then(journal => res.status(200).json(journal))
    .catch(err => res.status(500).json({error: err}))
})

router.get("/", (req, res) => {
    journal.findAll()
    .then(journals => res.status(200).json(journals))
    .catch(err => res.status(500).json({ error: err}))
});

router.get("/mine", validateSession, (req, res) => {
    let userid = req.user.id
    journal.findAll({
        where: { owner: userid }
    })
    .then(journal => res.status(200).json(journal))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/title', function (req, res) {
    let title = req.params.title;

    journal.findAll({
        where: { title: title }
    })
    .then(journal => res.status(200).json(journal))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;