import { redirect } from "@remix-run/node";
import LoginForm from "../../components/accounts/login";
import { isLogin, login } from "../../data/accounts.server";
import { validateLogin } from "../../data/validation/accounts";
import styles from "../../styles/accounts/login.css";

export default function LoginPage() {
    return <LoginForm />;
}

export const links = () => [{ rel: "stylesheet", href: styles }];

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  if (request.method === "POST") {
    // Validaciones
    try {
      validateLogin(formData);
    } catch (error) {
      return error;
    }


    // Iniciando sesion
    try {
      return await login(formData);
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
    if (userIsLogin) {
      return redirect("/");
    }
    return null;
  }
  