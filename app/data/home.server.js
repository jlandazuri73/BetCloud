import { getUserFromSession, isLogin } from "./accounts.server";
import { getPredictions } from "./predictions.server";
import { getUser } from "./user.server";
import { isValidVIP } from "./validation/accounts";

export async function loaderForHome(request, date = null) {
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
        let limit = userId ? 6 : 3;
        let predictions = await getPredictions(limit, "FREE", date) || [];
        return { userIsLogin, user, predictions };
    } catch (error) {
        console.log("Error en la funcion loaderForHome, error: " + error);
    }
}