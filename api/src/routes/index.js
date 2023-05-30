const { Router } = require("express");

const router = Router();


const correctText = require("./correct");
const translateText = require("./translate");
const textToVoice = require("./textToVoice");

router.use("/correct", correctText);
router.use("/translate", translateText);
router.use("/texttovoice", textToVoice);

module.exports = router