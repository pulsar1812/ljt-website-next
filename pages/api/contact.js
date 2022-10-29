import sendEmail from '../../utils/sendEmail'

export default async (req, res) => {
  const { name, email, number, subject, text } = req.body

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
