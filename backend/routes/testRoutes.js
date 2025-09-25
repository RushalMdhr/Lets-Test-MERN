import express from "express"
import {
    add_row,
    getFiltered,
    testNull,
    addWithForm,
    showMessage,
    learnMapping
} from "../controllers/testController.js"
const router = express.Router();

router.route("/add").post(add_row).get(async (req, res) => {
    res.send("reaching")
})
router.route("/mapit").post(learnMapping)
router.route("/addwithform").post(addWithForm)

router.route("/message").get(showMessage)
router.route("/get").get(getFiltered)
router.route("/null").get(testNull)

export default router;