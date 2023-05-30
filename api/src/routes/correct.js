const { Router } = require("express");
const openai = require('./openai');

const router = Router();



router.get("/", async(req, res, next) => {
    try {
        let { text } = req.body;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Correct this in the language that is: ${text}`,
            temperature: 0,
            max_tokens: 60,
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