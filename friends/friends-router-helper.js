const db = require("../data/db-config");

module.exports = {
    getfriends, 
    addfriends
} 

function getfriends () {
    return db("friends");
}

function addfriends (person) {
    return db("friends").insert(person)
}
