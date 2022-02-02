const nodemailer = require("nodemailer");

exports.sendEmail = async function ({
  receipent,
  name,
  password,
  email,
  subject,
  message,
}) {
  console.log({ receipent, name, password, email, subject, message });
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: email,
      pass: password,
    },
  });

  // send mail with defined transport object
  try {
    let info = await transporter.sendMail({
      from: email,
      to: receipent,
      subject: subject,
      text: message,
    });
    console.log("info", info);
    return true;
  } catch (error) {
    console.log("error", error.message);
    return false;
  }
};
