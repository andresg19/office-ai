const { Router } = require("express");

const router = Router();


const correctText = require("./correct");
const translateText = require("./translate");


router.use("/correct", correctText);
router.use("/translate", translateText);

module.exports = router