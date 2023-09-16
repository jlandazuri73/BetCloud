import { json, redirect } from "@remix-run/node";
import { getUserFromSession, isLogin } from "../../data/accounts.server";
import { activateVIP } from "../../data/user.server";

export async function loader({ request }) {
  const userIsLogin = await isLogin(request);
  const userId = await getUserFromSession(request);
  const searchParams = new URL(request.url).searchParams;
  let url = "";
  const tokenValid = "1aB2cD3eF4gH5iJ6kL7mN8oP9qR";
  const tokenURL = searchParams.get("token") || null;

  // No está logueado
  if (!userIsLogin) url = "/";
  // No existe token en la url
  if (!userIsLogin) url = "/";
  // El token no es correcto
  if (tokenURL !== tokenValid) url = "/";

  if (url == "/") return redirect(url);

  // Activar cuenta VIP
  await activateVIP(userId);
  return redirect("/");
}
