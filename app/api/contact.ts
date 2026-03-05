import nodemailer from 'nodemailer'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const port = process.env.VITE_EMAIL_PORT
      ? parseInt(process.env.VITE_EMAIL_PORT, 10)
      : 587

    const transporter = nodemailer.createTransport({
      host: process.env.VITE_EMAIL_HOST,
      port,
      secure: false,
      auth: {
        user: process.env.VITE_EMAIL_USER,
        pass: process.env.VITE_EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.VITE_EMAIL_FROM}>`,
      to: process.env.VITE_EMAIL_TO,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #091B26; border-bottom: 2px solid #0074E4; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
            Sent from RDM Website
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
