import { useEffect, useState } from "react";
import { NAME_APP } from "../../utils/info";
import { Form, useActionData, useNavigation, Link } from "@remix-run/react";
import SpinnerButton from "../shared/spinnerButton";

export default function LoginForm() {
  const [error, seterror] = useState(null);
  const validationsErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  // Borrar mensajes de error
  const clearErrors = () => {
    seterror(null);
  };

  // Esperando respuestas del servidor
  useEffect(() => {
    if (validationsErrors) {
      let response;
      if (!validationsErrors) {
        response = [];
      } else {
        response = Object.values(validationsErrors);
      }
      seterror(response[0] || "");
    }
  }, [validationsErrors]);

  return (
    <div className="wrapper">
      <div className="container">
        <Form className="form" method="post" onInput={clearErrors}>
          <h1>
            <Link to={"/"}>{NAME_APP}</Link>
          </h1>
          <input
            type="text"
            required
            placeholder="Usuario o correo"
            name="userName"
            spellCheck="false"
          />
          <input
            type="password"
            required
            placeholder="Contraseña"
            name="password"
          />
          <button
            type="submit"
            style={{ margin: "0 auto" }}
            id="login-button"
            className="flex items-center justify-center"
          >
            {isSubmitting ? <SpinnerButton /> : "Entrar"}
          </button>
          <Link to={"/accounts/register/"}>
            <p className="pt-2 text-blue-500 font-semibold cursor-pointer hover:underline transition">
              Crear una cuenta
            </p>
          </Link>
          <p className="text-red-500 pt-1 font-semibold">{error}</p>
        </Form>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
