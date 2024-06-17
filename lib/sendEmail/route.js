import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });

    const mailOptions = {
      from: `onboarding@resend.dev`,
      to: email,
      cc: "josue.gallardo@protonmail.com",
      subject: "Contacto Josué Gallardo",
      html: `
            <p>Hola ${name}, tu mensage fue recibido y te respondo en breve.</p>
            <hr>
            <p>${message}</p>
          `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
