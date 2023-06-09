const { Router } = require("express");
const openai = require("./openai");

const router = Router();

router.get("/", async(req, res, next) => {
    let { text, destLang } = req.query;
    
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Lea el siguiente texto entre comillas "${text}", traduzcalo al ${destLang}`,
            temperature: 0.3,
            max_tokens: 1500,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        res.status(200).send(response.data.choices[0].text)
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;