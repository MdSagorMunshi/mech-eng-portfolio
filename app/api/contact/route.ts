import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import axios from 'axios'

export async function POST(req: Request) {
  const { name, email, message, recaptcha } = await req.json()

  // Verify reCAPTCHA
  if (!recaptcha) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
  }

  const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`
  const recaptchaResponse = await axios.post(recaptchaVerifyUrl)

  if (!recaptchaResponse.data.success) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <h1>New message from ${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}