import { prisma } from "./database.server";


// Predicciones gratis para logueados y no logueados
export async function getPredictionsFree(limit) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return await prisma.predictions.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: limit,
            where: {
                type_user: "FREE",
                createdAt: {
                    gte: today
                }
            }
        });
    } catch (error) {
        console.log("Error en la funcion getPredictionsFree, error: " + error);
    }
}

// Historial para gratis
export async function getHistoryPredictionsFree(date) {
    try {
        const startDate = new Date(date);
        let endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
        return await prisma.predictions.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                type_user: "FREE",
                createdAt: {
                    gte: startDate,
                    lt: endDate
                }
            }
        });
    } catch (error) {
        console.log("Error en la funcion getHistoryPredictionsFree, error: " + error);
    }
}

// Predicciones VIP
export async function getPredictionsVIP() {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return await prisma.predictions.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                type_user: "VIP",
                createdAt: {
                    gte: today
                }
            }
        });
    } catch (error) {
        console.log("Error en la funcion getPredictionsVIP, error: " + error);
    }
}