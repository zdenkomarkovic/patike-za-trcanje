import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email je obavezan" },
        { status: 400 }
      );
    }

    // Validacija email formata
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nevalidan email format" },
        { status: 400 }
      );
    }

    // Kreiranje SMTP transportera
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true za 465, false za ostale portove
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email koji se šalje admin-u (vama)
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: "Nova newsletter prijava - Patike za trčanje",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #494179;">Nova newsletter prijava</h2>
          <p>Novi korisnik se prijavio za newsletter:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Datum:</strong> ${new Date().toLocaleString('sr-RS')}</p>
          </div>
        </div>
      `,
    };

    // Email koji se šalje korisniku (potvrda)
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Dobrodošli - Patike za trčanje Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #494179; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Patike za trčanje</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #494179;">Hvala što ste se prijavili!</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              Dobrodošli u našu zajednicu ljubitelja trčanja! 🏃‍♂️
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Kao što smo obećali, uskoro ćete dobiti ekskluzivan popust za vaš prvi poručeni par patika.
            </p>

            <div style="background-color: #FF7A59; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <h3 style="margin: 0 0 10px 0;">Vaš popust stiže uskoro!</h3>
              <p style="margin: 0; font-size: 14px;">Pratite svoj inbox za specijalnu ponudu</p>
            </div>

            <p style="font-size: 14px; color: #666;">
              Ako imate bilo kakvih pitanja, slobodno nas kontaktirajte.
            </p>
          </div>

          <div style="background-color: #494179; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © ${new Date().getFullYear()} Patike za trčanje. Sva prava zadržana.
            </p>
          </div>
        </div>
      `,
    };

    // Slanje oba email-a
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Email uspešno poslat" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Greška pri slanju email-a:", error);
    return NextResponse.json(
      { error: "Greška pri slanju email-a. Molimo pokušajte ponovo." },
      { status: 500 }
    );
  }
}
