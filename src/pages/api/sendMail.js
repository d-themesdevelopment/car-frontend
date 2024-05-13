// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { username, email, message } = JSON.parse(req.body);

  const transporter = nodemailer.createTransport({
    // Configure your email service provider settings here
    service: "gmail",
    auth: {
      user: "gaiahealersshopify@gmail.com",
      pass: "byep avju cnsz aqut",
    },
  });

  try {
    await transporter.sendMail({
      from: `${email}`,
      to: "info@germanautoparts.eu",
      subject: `Hi, This is ${username}`,
      text: `${message}. Please email me at ${email}`,
    });

    await transporter.sendMail({
      from: `${email}`,
      to: email,
      subject: `Hi, ${username} Welcome to our business`,
      text: `You was registered as a member `,
    });

    res.status(200).json({ text: "Success" });
  } catch (error) {
    console.log("error", error);

    res.status(500).json({ text: "Error" });
  }
}
