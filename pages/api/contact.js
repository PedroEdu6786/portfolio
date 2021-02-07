require('dotenv').config
const mailgun = require('mailgun-js')

const emailHandler = (req, res) => {
  if (req.method === 'POST') {
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    })

    //   const data = JSON.parse(req.body)

    const email = {
      from: `Pipe <carreta_1056@hotmail.com>`,
      to: 'Pedro Cruz <pedrcg835@gmail.com>',
      subject: 'Hey',
      text: 'lorem ipsum',
    }

    mg.messages().send(email, (error, body) => {
      console.log(body)
      if (error) {
        res.status(400).json({ message: 'Something went wrong, try again' })
      }
    })
    res.status(200).json({ message: 'Message sent!' })
  }
}

export default emailHandler
