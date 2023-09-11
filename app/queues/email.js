import { sendEmail } from "../utils/emails/functions";
import { NAME_APP } from "../utils/info";

// Procesar cola EMAIL
export async function proccessQueueEMAIL(data) {
  try {
    const email = data?.email;
    const type = data?.type;
    // Correo de bienvenida
    if (type === "WELCOME") {
      return sendEmail(
        email,
        `Bienvenido a ${NAME_APP}`,
        `Hola, gracias por registrarte en ${NAME_APP}. Te damos la bienvenida!`
      );
    }

    return true;
  } catch (error) {
    console.log("Error en la funcion proccessEMAIL:", error);
  }
}
