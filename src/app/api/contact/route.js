import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || "ar.dev.notfound@gmail.com",
      pass: process.env.GMAIL_PASS || "wwfygoqyqraseeln",
    },
  });

  const mailOptions = {
    from: email,
    to: 'ar.dev.notfound@gmail.com',
    subject: `New contact form message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
