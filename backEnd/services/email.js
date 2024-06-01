import nodemailer from 'nodemailer'

export const sendMail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.PASS
    },
  });

  const mailInfo = {
    from: process.env.SENDER_MAIL,
    to: email,
    subject: "Welcome to Investors Dashboard",
    text: `Welcome ${name} to Investors Dashboard! We're glad to have you on board.`,
    html: `<p>Welcome ${name} to Investors Dashboard! We're glad to have you on board.</p>`,
  };

  const info = await transporter.sendMail(mailInfo);
  console.log("Message sent: %s", info.messageId);
};