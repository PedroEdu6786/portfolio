require('dotenv').config
const mailgun = require('mailgun-js')

const emailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    })

    const data = req.body

    const email = {
      from: `${data.name} <${data.email}>`,
      to: 'Pedro Cruz <cruzeduardo029@gmail.com>',
      subject: `${data.subject}`,
      text: `${data.body}`,
    }

    mg.messages().send(email, (error, body) => {
      if (error) {
        res.status(400).json({
          title: 'Something went wrong',
          description: 'The email has not been sent, please try again',
          status: 'error',
        })
      }
    })
    res.status(200).json({
      title: 'Message sent!',
      description: 'The email was successfully sent to Pedro Cruz!',
      status: 'success',
    })
  }
}

export default emailHandler
