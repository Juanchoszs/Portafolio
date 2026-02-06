import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('Missing email configuration. GMAIL_USER or GMAIL_PASSWORD not set.');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email to the portfolio owner
    const mailOptionsToOwner = {
      from: process.env.GMAIL_USER,
      to: 'juanchopolas04090@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Auto-reply to the sender
    const mailOptionsToSender = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Gracias por contactarme - Juan Sebastian Rincon',
      text: `Hola ${name},\n\nGracias por escribirme. He recibido tu mensaje y me pondré en contacto contigo lo antes posible.\n\nSaludos,\nJuan Sebastian Rincon Linares`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hola ${name},</h2>
          <p>Gracias por escribirme. He recibido tu mensaje y me pondré en contacto contigo lo antes posible.</p>
          <br>
          <p>Saludos,</p>
          <p><strong>Juan Sebastian Rincon Linares</strong></p>
          <p>Full Stack Developer</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToOwner);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
