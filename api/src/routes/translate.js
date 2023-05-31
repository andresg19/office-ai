const { Router } = require("express");
const openai = require("./openai");

const router = Router();

router.get("/", async(req, res, next) => {
    let { text, destLang } = req.query;
    
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Translate this into ${destLang}: ${text}`,
            temperature: 0.3,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        res.status(200).send(response.data.choices[0].text)
    } catch (error) {
        next(error)
    }
});

module.exports = router;