const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  //response ki jaag v=review
  //   const prompt = req.query.prompt;
  const code = req.body.code; //pehle code ki jagah prompt tha

  if (!code) {
    return res.status(400).send("code is required");
  }
  const response = await aiService(code);

  res.send(response);
};
