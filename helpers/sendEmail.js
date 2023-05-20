const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "victoriya.bilauchuk@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: "victoriya.bilauchuk@meta.ua",
  to: "ririyej206@appxapi.com",
  subject: "Nodemailer test",
  text: "Привіт. Ми тестуємо надсилання листів!",
};

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));
