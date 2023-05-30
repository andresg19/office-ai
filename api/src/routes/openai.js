require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");


/*  config init openai */
const config = new Configuration({
    apiKey: `${process.env.OPEN_KEY}`
})

const openai = new OpenAIApi(config);
/* ------- */

module.exports = openai;