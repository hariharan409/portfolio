const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.PALM2_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // gemini-2.0

exports.googleBardPalm2Api = async(req,res) => {
    try {
        const prompt = req.query.payload;
        const result = await model.generateContent(prompt);
        res.send(result.response.text());
    } catch (error) {
        res.send("fuck you bro");
    }
}