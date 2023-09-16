import { prisma } from "./database.server";

// Obtener datos del usuario
export async function getUser(userId) {
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

// Cambiar campo isVIP
export async function updateUserisVIP(isVIP, userId) {
    try {
        return await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                isVIP: Boolean(isVIP),
                payCompleted: Boolean(false),
                datePayment: null,
            }
        })
    } catch (error) {
        console.log("Error en la funcion updateUserisVIP, error: " + error);
    }
}

// Activar cuenta VIP
export async function activateVIP(userId) {
    try {
        return await prisma.user.update({
            where: { id: userId },
            data: {
                isVIP: Boolean(true),
                payCompleted: Boolean(true),
                datePayment: new Date(),
            }
        });
    } catch (error) {
        console.log("Error en la funcion activateVIP, error: " + error);
    }
}