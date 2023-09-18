import { prisma } from "./database.server";

export async function getPredictions(limit, type_user) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return await prisma.predictions.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: limit,
            where: {
                type_user: type_user,
                createdAt: {
                    gte: today
                }
            }
        });
    } catch (error) {
        console.log("Error en la funcion getPredicitons, error: " + error);
    }
}