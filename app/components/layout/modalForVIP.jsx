import { Link, useLoaderData } from "@remix-run/react";
import { NAME_APP } from "../../utils/info";

export default function ModalForVIP({ show, setShow }) {
  const { userIsLogin} = useLoaderData();

  return (
    <>
      {show && (
        <div className="modalApp">
          <div className="contentModalApp rounded-lg" style={{ height: "100%" }}>
            <div className="headerModalApp">
              <div className="headerModalApp-c-c">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p className="z-10">¡{userIsLogin ? "Pásate" : "Regístrate"} a {NAME_APP} VIP! </p>
              <button
                onClick={() => setShow(false)}
                className="bg-red-500 w-10 rounded flex items-center justify-center h-4/5 transition"
              >
                <i className="fa-solid fa-xmark" style={{ fontSize: "20px" }}></i>
              </button>
            </div>
            <div className="bodyModalApp">
              <div className="content-body text-lg">
                <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                  <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                    <img
                      src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                      alt=""
                      className="rounded-3xl w-20 h-20"
                    />
                    <div className="ml-5">
                      <span className="block text-3xl font-semibold text-white">
                        {NAME_APP} VIP
                      </span>
                      <span>
                        <span className="font-medium text-2xl align-top">
                          $&thinsp;
                        </span>
                        <span className="text-2xl font-bold text-white">10 </span>
                      </span>
                      <span className="font-medium">/ mes</span>
                    </div>
                  </div>
                  <ul className="mb-10 font-medium text-xl">
                    <li className="flex mb-6">
                      <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                      <span className="ml-3">
                        Acceso a{" "}
                        <span className="text-white">Predicciones Premium</span>
                      </span>
                    </li>
                    <li className="flex mb-6">
                      <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                      <span className="ml-3">
                        <span className="text-white">Análisis Detallados</span>
                      </span>
                    </li>
                    <li className="flex mb-6">
                      <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                      <span className="ml-3">
                        <span className="text-white">Apoyo Personalizado</span>
                      </span>
                    </li>

                    <li className="flex mb-6">
                      <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                      <span className="ml-3">
                        <span className="text-white">
                          Selección Exclusiva de Partidos
                        </span>
                      </span>
                    </li>
                    <li className="flex mb-6">
                      <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                      <span className="ml-3">
                        <span className="text-white">Comunidad Privada</span>
                      </span>
                    </li>
                  </ul>
                  <Link
                    to="/accounts/register?plan=VIP"
                    className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
                  >
                    {userIsLogin ? "Cambiarme a VIP" : "Elegir plan"}
                    <img
                      src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                      className="ml-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
