import nodemailer from 'nodemailer'

export default async function sendEmail(options) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const { name, email, number, subject, text } = options

  const message = {
    from: `${name} <${email}>`,
    to: process.env.TO_EMAIL,
    subject: 'Contact email from company website',
    text: text,
    html: `
            <b>From:</b> ${name} <br />
            <b>Phone Number:</b> ${number} <br />
            <b>Subject:</b> ${subject} <br />
            <b>Message:</b> ${text}
        `,
  }

  const info = await transporter.sendMail(message)

  console.log('Message sent: %s', info.messageId)
}
