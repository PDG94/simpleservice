const { Router } = require("express")
const router = Router()
const { dato } = require("../controllers/mailer.js")
const User = require("../../db.js")


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body

        await User.update(
            { name, email },
            {
                where:
                    { id, }
            }
        )

        res.status(200).json(await dato(name, email)).send("User updated")

    } catch (error) {
        res.status(400).send("Couldn't update user")
    }
})

module.exports = router;