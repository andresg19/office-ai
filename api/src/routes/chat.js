const { Router } = require("express");
const openai = require("./openai");
const fs = require("fs");

const router = Router();

router.get("/", async(req, res, next) => {
    let { text } = req.query;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 2000,
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