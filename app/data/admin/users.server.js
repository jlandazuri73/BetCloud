import { prisma } from "../database.server";

export async function getUsers(){
    try {
        return await prisma.user.findMany({
            include: {
                role: true
            }
        });
    } catch (error) {
        console.log("Error en la funcion getUsers, error: " + error);
    }
}