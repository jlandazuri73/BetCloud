import { redirect } from "@remix-run/node";
import RegisterComponent from "../../components/accounts/register";
import {
  getUserFromSession,
  isLogin,
  signup,
} from "../../data/accounts.server";
import { validateRegister } from "../../data/validation/accounts";
import { updateUserisVIP } from "../../data/user.server";

export default function Register() {
  return <RegisterComponent />;
}

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  if (request.method === "POST") {
    // Validaciones
    try {
      validateRegister(formData);
    } catch (error) {
      return error;
    }

    // Creando cuenta
    try {
      return await signup(formData);
    } catch (error) {
      if (error.status === 422) {
        return { message: error.message };
      }
    }
  }

  return null;
}

export async function loader({ request }) {
  const userIsLogin = await isLogin(request);
  const userId = await getUserFromSession(request);
  const searchParams = new URL(request.url).searchParams;
  const planVIP_URL = searchParams.get("plan") === "VIP" ? true : false;

  if (userIsLogin) {
    if (planVIP_URL) {
      await updateUserisVIP(true, userId);
      return redirect("/validation/pay-required?type=PAY");
    }
    return redirect("/");
  }
  return null;
}
