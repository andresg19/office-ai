const { Router } = require("express");

const router = Router();


const correctText = require("./correct");
const translateText = require("./translate");
const chat = require("./chat");

router.use("/correct", correctText);
router.use("/translate", translateText);
router.use("/chat", chat);

module.exports = router