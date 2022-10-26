import sendEmail from '../../utils/sendEmail'

export default async (req, res) => {
  console.log(req.body)
  const { name, email, number, subject, text } = req.body

  // const data = {
  //   // Update your email here
  //   to: 'info@ljt.app',
  //   from: email,
  //   subject: 'Hi there',
  //   text: text,
  //   html: `
  //           <b>From:</b> ${name} <br />
  //           <b>Number:</b> ${number} <br />
  //           <b>Subject:</b> ${subject} <br />
  //           <b>Message:</b> ${text}
  //       `,
  // }

  // console.log(data)
  const data = { name, email, number, subject, text }

  try {
    const response = await sendEmail(data)
    console.log(response)
    res.status(200).send('Email send successfully')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error proccessing charge')
  }
}
