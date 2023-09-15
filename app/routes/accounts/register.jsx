import { redirect } from "@remix-run/node";
import RegisterComponent from "../../components/accounts/register";
import { isLogin, signup } from "../../data/accounts.server";
import { validateRegister } from "../../data/validation/accounts";

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
  if (userIsLogin) {
    return redirect("/app/");
  }
  return null;
}
