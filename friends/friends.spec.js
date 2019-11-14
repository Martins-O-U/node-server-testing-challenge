const friend = require("./friends-router-helper");
const db = require("../data/db-config");



describe("Clearing Test", () => {
    beforeEach(async () => {
        await db("friends").truncate();
    })

    describe("Database test", () => {
        it ("should add a fun anme to the database", async () => {
            await friend.addfriends({ name: "Tunde"})
            const person = await db("friends");
            let i = person.length;
            expect(person).toHaveLength(i++);
        })

    })
    describe("Database Test", () => {
        it ("should show everyone in the database", async () => {
            await friend.getfriends()
        })
    })

})





