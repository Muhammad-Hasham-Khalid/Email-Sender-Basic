const express = require("express");
const { sendEmail } = require("./util");

const app = express();

app.use(express.json());

app.route("/").post(async (request, response) => {
  try {
    const { receipent, name, password, email, subject, message } = request.body;
    const emailSent = await sendEmail({
      receipent,
      name,
      password,
      email,
      subject,
      message,
    });
    return response.status(200).json({ success: emailSent });
  } catch (error) {
    return response.status(400).json({ success: false, error: error.message });
  }
});

app.use(express.static("client"));

app.listen(5000, () => {
  console.log("Server listening on http://localhost:5000/");
});
