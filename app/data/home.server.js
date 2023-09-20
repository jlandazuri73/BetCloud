import { getUserFromSession, isLogin } from "./accounts.server";
import { getHistoryPredictionsFree, getPredictionsFree, getPredictionsVIP } from "./predictions.server";
import { getUser } from "./user.server";
import { isValidVIP } from "./validation/accounts";

export async function loaderForHome(request, type = "FREE", param) {
    try {
        const userIsLogin = await isLogin(request);
        const userId = await getUserFromSession(request);
        let user = {};
        if (userId) {
            user = await getUser(userId);
            const validVIP = isValidVIP(user);
            if (!validVIP?.ok) {
                return {
                    redirect: `/validation/pay-required?type=${validVIP?.sms}`
                };
            }
        }
        let limit = (type == "VIP") ? 10 : userId ? 6 : 3;
        let predictions = [];
        // Predicciones gratis para logueados y no logueados
        if (type == "FREE") predictions = await getPredictionsFree(limit) || [];
        // Historial
        if(type == "HISTORY") predictions = await getHistoryPredictionsFree(param) || [];
        // Predicciones VIP
        if(type == "VIP") predictions = await getPredictionsVIP() || [];

        return { userIsLogin, user, predictions };
    } catch (error) {
        console.log("Error en la funcion loaderForHome, error: " + error);
    }
}