import { useEffect, useState } from "react";
import { NAME_APP, URL_PAY } from "../../utils/info";
import { Form, Link, useLoaderData, useSearchParams } from "@remix-run/react";

export default function PayRequired() {
  const [sms, setsms] = useState("");
  const [searchParams] = useSearchParams();
  const typeError = searchParams.get("type") || null;
  const { user } = useLoaderData();

  useEffect(() => {
    if (typeError == "PAY") {
      setsms(
        `Hola ${
          user?.name || ""
        }, para continuar y tener acceso a los mejores pronósticos de futbol debes pagar la suscripción de usuario VIP.`
      );
    } else if (typeError == "EXPIRED") {
      setsms(
        `Hola ${
          user?.name || ""
        }, tu suscripción como usuario VIP ya expiró. Para volver a actuvar tu cuenta debes pagar la suscripción mensual.`
      );
    }
  }, [typeError]);

  return (
    <>
      <div className="w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
        <h1 className="text-3xl font-bold text-center p-3 pb-0">
          {NAME_APP?.toUpperCase()}
        </h1>
        <Form method="post" className="text-center">
          <p
            style={{ margin: "0 auto" }}
            className="text-center md:w-2/4 pb-2 text-lg"
          >
            {sms} {" "}
            Si quieres seguir con usuario gratis haz
          <button className="text-blue-500 mx-2 bg-transparent cursor-pointer">
            Clic aquí
          </button>
          </p>
        </Form>
        <hr className="py-3" />
        <div
          style={{ margin: "0 auto" }}
          className="md:w-2/4 flex items-center justify-center"
        >
          <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-screen-lg">
            <div>
              <h2 className="text-md font-medium">Detalles de la compra</h2>
              <div className="bg-white rounded mt-4 shadow-lg py-6">
                <div className="px-8">
                  <div className="flex items-end">
                    {NAME_APP} versión VIP
                    <span className="text-md ml-auto font-semibold">$10</span>
                    <span className="text-sm text-gray-500 mb-px">/mes</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-2">
                    Vas a tener acceso a los mejores pronósticos deportivos.
                  </span>
                </div>
                <div className="px-8 mt-4">
                  <div className="flex items-end justify-between">
                    <span className="text-md font-semibold">Iva</span>
                    <span className="text-md text-gray-500 mb-px">0%</span>
                  </div>
                </div>
                <div className="px-8 mt-4 border-t pt-4">
                  <div className="flex items-end justify-between">
                    <span className="font-semibold">
                      Disponible a este precio solo por hoy
                    </span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <span className="text-sm text-gray-500 mt-2">
                    ¡Aprovecha esta oferta!
                  </span>
                </div>
                <div className="flex items-center px-8 mt-8"></div>
                <div className="flex flex-col px-8 pt-4">
                  <Link target="_blank" to={URL_PAY}>
                  <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
                    Continuar
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
