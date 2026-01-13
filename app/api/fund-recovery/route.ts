import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, scamType, amountLost, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: 'New Fund Recovery Consultation Request',
      html: `
        <h2>New Fund Recovery Consultation Request</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Scam Type:</strong> ${scamType || 'Not provided'}</p>
        <p><strong>Amount Lost:</strong> ${amountLost || 'Not provided'}</p>
        <p><strong>Case Details:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Fund Recovery Consultation Request
        
        Name: ${name || 'Not provided'}
        Email: ${email}
        Scam Type: ${scamType || 'Not provided'}
        Amount Lost: ${amountLost || 'Not provided'}
        Case Details: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Consultation request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
