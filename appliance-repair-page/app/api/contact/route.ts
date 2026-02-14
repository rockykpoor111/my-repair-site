import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, city, service, issue, type } = body;

        // Create a transporter using SMTP
        // NOTE: You need to replace these with your actual email service credentials
        // For Gmail, use an App Password, not your login password
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email provider
            auth: {
                user: 'appliancesprodelhi@gmail.com', // Updated
                pass: 'myzs hoqj ztub loaz',    // Replace with your App Password
            },
        });

        // Email content
        const mailOptions = {
            from: 'appliancesprodelhi@gmail.com', // Sender address
            to: 'appliancesprodelhi@gmail.com',   // Receiver address (to yourself)
            subject: `New Lead: ${service || type} - ${name}`,
            text: `
        New Lead Received:
        
        Name: ${name}
        Phone: ${phone}
        City: ${city || 'Not Provided'}
        Service: ${service || type || 'General Inquiry'}
        Issue: ${issue || 'Not Specified'}
        
        Sent from AppliancesPro Website
      `,
            html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city || 'Not Provided'}</p>
        <p><strong>Service:</strong> ${service || type || 'General Inquiry'}</p>
        <p><strong>Issue:</strong> ${issue || 'Not Specified'}</p>
        <br>
        <p><small>Sent from AppliancesPro Website</small></p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        // Return 200 even if email fails so it doesn't block the user flow
        // But log the error for debugging
        return NextResponse.json({ message: 'Failed to send email', error: String(error) }, { status: 500 });
    }
}
