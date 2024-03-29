require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io'/*process.env.SMTP_HOST*/,
    port: 2525/*process.env.SMTP_PORT*/,
    auth: {
        user: 'af19fae377ed79'/*process.env.SMTP_USER*/,
        pass: '60f217e059b5a6'/*process.env.SMTP_PASS*/
    }
})

app.post('/send-email', (req, res) => {
    const { name, email, customText } = req.body

    const mailOptions = {
        from: email,
        to: 'melanie.lassarade@gmail.com',
        subject: 'Nouveau message depuis le formulaire de contact du site CV',
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${customText}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error)
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail')
        } else {
            console.log('E-mail envoyé:', info.response);
            res.status(200).send('E-mail envoyé avec succès')
        }
    })
})

const PORT = process.env.SERV_PORT || 3000
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`)
})
