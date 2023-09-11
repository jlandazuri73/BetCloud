const nodemailer = require("nodemailer");

export async function sendEmail(to, subject, html) {
  try {
    // crear el objeto transporter con los datos del servicio de correo
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    // definir el mensaje que se enviará
    const message = {
      from: process.env.USER_EMAIL, // correo desde el cual se enviará el mensaje
      to, // correo del destinatario
      subject,
      html,
    };

    // enviar el mensaje
    const info = await transporter.sendMail(message);
    console.log("Correo electrónico enviado:", info.messageId);

    return true; // Se envió el mensaje exitosamente
  } catch (error) {
    console.error(error);
    return false; // Ocurrió un error al enviar el mensaje
  }
}
