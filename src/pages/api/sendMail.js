// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { username, email, message } = req.body;

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
        subject: `Hi ${username}`,
        text: `${message}`,
      });

      return { message: "Sent the message" };
    } catch (error) {
      console.log("error", error);

      return { message: "Failed the message" };
    }

  return { message: "Sent the message" };
}
