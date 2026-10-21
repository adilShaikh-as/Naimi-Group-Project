import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(100),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .max(15, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  configuration: z.string().nullish(),
  message: z.string().max(2000).nullish(),
  topic: z.string().max(200),
});

const esc = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');


const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid submission' },
        { status: 400 }
      );
    }

    const { name, phone, email, configuration, message, topic } = parsed.data;

    const { error } = await resend.emails.send({
     
      from: 'Naimi Group <enquiries@naimigroup.co.in>',
      to: 'astraders812@gmail.com', 
      replyTo: email,
      subject: `New enquiry — ${oneLine(configuration || topic)}`,
      html: `
        <p><b>Enquiring about:</b> ${esc(topic)}</p>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Phone:</b> ${esc(phone)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        ${configuration ? `<p><b>Configuration:</b> ${esc(configuration)}</p>` : ''}
        ${message ? `<p><b>Message:</b> ${esc(message).replace(/\r?\n/g, '<br />')}</p>` : ''}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: "Couldn't send your enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('contact route error:', err);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}