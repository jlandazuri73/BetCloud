import { useEffect, useState } from "react";
import { NAME_APP } from "../../utils/info";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";

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
      <div class="w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
        <h1 className="text-3xl font-bold text-center p-3 pb-0">
          {NAME_APP?.toUpperCase()}
        </h1>
        <p
          style={{ margin: "0 auto" }}
          className="text-center md:w-2/4 pb-2 text-lg"
        >
          {sms}
          <Form method="post" className="text-center ">
            Si quieres seguir con usuario gratis haz
            <button className="text-blue-500 mx-2 bg-transparent cursor-pointer">
              Clic aquí
            </button>
          </Form>
        </p>
        <hr className="py-3" />
        <div
          style={{ margin: "0 auto" }}
          className="md:w-2/4 flex items-center justify-center"
        >
          <div class="grid lg:grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-screen-lg">
            <div>
              <h2 class="text-md font-medium">Detalles de la compra</h2>
              <div class="bg-white rounded mt-4 shadow-lg py-6">
                <div class="px-8">
                  <div class="flex items-end">
                    {NAME_APP} versión VIP
                    <span class="text-md ml-auto font-semibold">$10</span>
                    <span class="text-sm text-gray-500 mb-px">/mes</span>
                  </div>
                  <span class="text-sm text-gray-500 mt-2">
                    Vas a tener acceso a los mejores pronósticos deportivos.
                  </span>
                </div>
                <div class="px-8 mt-4">
                  <div class="flex items-end justify-between">
                    <span class="text-md font-semibold">Iva</span>
                    <span class="text-md text-gray-500 mb-px">0%</span>
                  </div>
                </div>
                <div class="px-8 mt-4 border-t pt-4">
                  <div class="flex items-end justify-between">
                    <span class="font-semibold">
                      Disponible a este precio solo por hoy
                    </span>
                    <span class="font-semibold">$10</span>
                  </div>
                  <span class="text-sm text-gray-500 mt-2">
                    ¡Aprovecha esta oferta!
                  </span>
                </div>
                <div class="flex items-center px-8 mt-8"></div>
                <div class="flex flex-col px-8 pt-4">
                  <form>
                    <script
                      src="https://checkout.wompi.co/widget.js"
                      data-render="button"
                      data-public-key="pub_prod_Kw4aC0rZVgLZQn209NbEKPuXLzBD28Zx"
                      data-currency="COP"
                      data-amount-in-cents="4950000"
                      data-reference="4XMPGKWWPKWQ"
                      data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
                    ></script>
                  </form>
                  <button class="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
