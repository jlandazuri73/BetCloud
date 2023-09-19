import { prisma } from "./database.server";

export async function getPredictions(limit, type_user = "FREE", date) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let where = {
            type_user: type_user,
            createdAt: {
                gte: today
            }
        };
        if (date) {
            const startDate = new Date(date);
            let endDate = new Date(date);
            endDate.setDate(endDate.getDate() + 1);
            where.createdAt = {
                gte: startDate,
                lt: endDate
            }
        }

        return await prisma.predictions.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: limit,
            where
        });
    } catch (error) {
        console.log("Error en la funcion getPredicitons, error: " + error);
    }
}
