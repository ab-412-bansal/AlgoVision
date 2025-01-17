import express from "express"
import ContactModel from "../models/Contact.js"

const router = express.Router()


router.post("/", async  (req, res) => {
    try {
        
        const name = req.body.name
        const email = req.body.email
        const mbno = req.body.mbno
        const starRatings = req.body.starRatings
        const reason = req.body.reason
        const message = req.body.message
        const contact = await ContactModel.create({
            name, email, mbno, starRatings, reason, message
        })
        return res.json({msg: "Thank you for Contacting us!"})
    } catch (error) {
        return res.json({error: "Error in saving contact info"})
    }
})

export default router