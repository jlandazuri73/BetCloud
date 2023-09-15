import { Form, Link, useActionData, useNavigation, useSearchParams } from "@remix-run/react";
import { NAME_APP } from "../../utils/info";
import { useEffect, useState } from "react";
import SpinnerButton from "../shared/spinnerButton";

export default function RegisterComponent() {
  const [error, seterror] = useState({});
  const validationsErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const [searchParams] = useSearchParams(); 
  const planVIP_URL = searchParams.get('plan') === "VIP";

  // Borrar mensajes de error
  const clearErrors = () => {
    seterror({});
  };

  // Esperando respuestas del servidor
  useEffect(() => {
    if (validationsErrors) {
      seterror(validationsErrors);
    }
  }, [validationsErrors]);

  return (
    <>
      <div className="min-h-screen bg-[#0A192F] text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-20 bg-[#0A192F] shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 bg-[#051122] text-white rounded">
            <Link to={"/"}>
              <h2 className="text-center uppercase font-bold text-2xl text-white ">
                {NAME_APP}
              </h2>
            </Link>
            <Form
              method="post"
              onInput={clearErrors}
              className="mt-12 flex flex-col items-center"
            >
              <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                Crea una cuenta
              </h1>
              <p>Llena el formulario para crear una cuenta.</p>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 text-black rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    required
                  />
                  <p className="text-red-500 py-2 font-semibold">
                    {error?.name}
                  </p>
                  <input
                    className="w-full px-8 text-black py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    required
                  />
                  <p className="text-red-500 py-2 font-semibold">
                    {error?.email}
                  </p>
                  <input
                    className="w-full px-8 text-black py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Crea una contraseña"
                    name="password"
                    required
                  />
                  <p className="text-red-500 py-2 font-semibold">
                    {error?.password}
                  </p>
                  <select
                    className="w-full px-8 text-black py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    name="plan"
                    required
                    defaultValue={planVIP_URL ? "VIP" : "FREE"}
                  >
                    <option value="FREE">Plan Gratis</option>
                    <option value="VIP">Plan VIP</option>
                  </select>
                  <p className="text-red-500 py-2 font-semibold">
                    {error?.plan}
                  </p>
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    {isSubmitting ? (
                      <SpinnerButton />
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">Crear cuenta</span>
                      </>
                    )}
                  </button>
                  <p className="text-red-500 py-2 font-semibold">
                    {error?.message}
                  </p>

                  <p className="text-center">
                    ¿Ya tienes una cuenta?{" "}
                    <Link className="text-blue-500" to={"/accounts/login"}>Inicia sesión</Link>
                  </p>
                  <p className="mt-6 text-xs text-gray-300 text-center">
                    Acepto cumplir con los{" "}
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terminos del servicio
                    </a>{" "}
                    y las{" "}
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Politicas de privacidad
                    </a>{" "}
                    de {NAME_APP}
                  </p>
                </div>
              </div>
            </Form>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
