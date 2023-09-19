import { prisma } from "./database.server";

export async function getPredictions(limit, type_user, date) {
    try {
        if (!date) {
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
        } else {
            const startDate = new Date(date);
            let endDate = new Date(date);
            endDate.setDate(endDate.getDate() + 1);

            return await prisma.predictions.findMany({
                orderBy: {
                    createdAt: "desc"
                },
                take: limit,
                where: {
                    type_user: type_user,
                    createdAt: {
                        gte: startDate,
                        lt: endDate
                    }
                }
            });
        }
    } catch (error) {
        console.log("Error en la funcion getPredicitons, error: " + error);
    }
}
