import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER_EMAIL,
        pass: process.env.MAILER_USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Josué Gallardo <${process.env.MAILER_USER_EMAIL}>`,
      to: email,
      cc: "josue.gallardo@protonmail.com",
      subject: "Contacto Josué Gallardo",
      html: `
            <h2>Hola <b>${name}</b>,</h2>
            <p>Tu mensaje fue recibido, te respondo en breve.</p>
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
    /*     console.error("Email sending error:", error); */ // Log the error for debugging
    return NextResponse.json(
      { message: "Error al enviar el email: " + error.message }, // Include error details
      { status: 500 }
    );
  }
}
