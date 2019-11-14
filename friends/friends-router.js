const express = require("express");
const router = express.Router();
const db = require("./friends-router-helper");


router.get("/", (req, res) => {
    db.getfriends()
        .then(friends => {
            res.status(200).json(friends)
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong:- " + error.message})
        })
})

router.post("/", (req, res) => {
    db.addfriends(req.body, "id")
        .then(person => {
            res.status(200).json({message: `A friend with ID ${person} just got created`});
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong:- " + error.message})
        })
})


module.exports = router; 