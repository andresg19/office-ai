const { Router } = require("express");
const openai = require("./openai");
const fs = require("fs");

const router = Router();

router.get("/", async(req, res, next) => {
    let { text } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "hola amigo",
            max_tokens: 50,
            temperature: 0.8,
            n: 1,
        }).then((response) => {
            const audio = response.data.choices[0].text.trim();
        
            // Crear datos URI del audio
            const dataURI = `data:audio/wav;base64,${Buffer.from(audio, 'binary').toString('base64')}`;
        
            // Enviar el audio como respuesta
            res.send(`
              <audio controls>
                <source src="${dataURI}" type="audio/wav">
                Tu navegador no admite la reproducción de audio.
              </audio>
            `)
        });
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;