import { prisma } from "./database.server";

// Obtener datos del usuario
export async function getUser(userId){
    try {
        return await prisma.user.findFirst({
            where: { id: userId },
            include: {
                role: true
            }
        });
    } catch (error) {
        console.log("Error en la funcion getUser", error);
    }
}