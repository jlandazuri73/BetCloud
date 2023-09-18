import { prisma } from "../database.server";


// Crear prediccion
export async function createPrediction(data) {
    try {
        return await prisma.predictions.create({
            data: {
                team_local: data?.team_local || "",
                team_visiting: data?.team_visiting || "",
                ligue: data?.ligue || "",
                ligue_img: data?.ligue_img || "",
                hour: data?.hour || "",
                prediction: data?.prediction,
                odds: parseFloat(data?.odds || 0.0),
                status_prediction: data?.status_prediction || "",
                type_user: data?.type_user || "",
                gols_local: parseInt(data?.gols_local || 0),
                gols_visiting: parseInt(data?.gols_visiting || 0)
            }
        });
    } catch (error) {
        console.log("Error en la funcion createPrediction, error: " + error);
    }
}

// Actualizar predicciones
export async function updatePrediction(data, id) {
    try {
        return await prisma.predictions.update({
            data: {
                team_local: data?.team_local || "",
                team_visiting: data?.team_visiting || "",
                ligue: data?.ligue || "",
                ligue_img: data?.ligue_img || "",
                hour: data?.hour || "",
                prediction: data?.prediction,
                odds: parseFloat(data?.odds || 0.0),
                status_prediction: data?.status_prediction || "",
                type_user: data?.type_user || "",
                gols_local: parseInt(data?.gols_local || 0),
                gols_visiting: parseInt(data?.gols_visiting || 0)
            },
            where: { id }
        });
    } catch (error) {
        console.log("Error en la funcion updatePrediction, error: " + error);
    }
}

// Obtener predicciones
export async function getPredictions() {
    try {
        return await prisma.predictions.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    } catch (error) {
        console.log("Error en la funcion getPredictions, error: " + error);
    }
}

// Obtener una prediccion
export async function getPrediction(id) {
    try {
        return await prisma.predictions.findFirst({
            where: { id }
        });
    } catch (error) {
        console.log("Error en la funcion getPrediction, error: " + error);
    }
}