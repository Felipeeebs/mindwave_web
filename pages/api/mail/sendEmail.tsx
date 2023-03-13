import { createTransport } from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const auth = {
  auth: {
    api_key: '509934e35a7df002ad75983ea7e90246-52d193a0-09943abb',
    domain: 'mg.mindwave.cl',
  },
};

const nodemailerMailgun = createTransport(mg(auth));

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email, message, subject } = req.body;

      // send mail with defined transport object
      const info = await nodemailerMailgun.sendMail({
        from: `${name} <${email}>`,
        to: "contacto@mindwave.cl",
        subject: subject,
        text: message,
      });

      console.log(`Message sent: ${info.messageId}`);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};