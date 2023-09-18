import { useState } from "react";
import ItemPronostico from "../shared/itemPronostico";
import Modal from "../shared/modal";
import { Link, useLoaderData } from "@remix-run/react";
import { NAME_APP } from "../../utils/info";

export default function Home() {
  const { predictions, userIsLogin } = useLoaderData();
  const [showModal, setshowModal] = useState(false);

  return (
    <>
    <div className="w-full h-auto mb-3 flex items-center justify-center rounded p-2 overflow-x-auto">
      <div className="h-auto flex cursor-pointer hover:bg-blue-400 transition items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
      <div className="h-auto flex items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
      <div className="h-auto flex items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
      <div className="h-auto flex items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
      <div className="h-auto flex items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
      <div className="h-auto flex items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
      <div className="h-auto flex items-center justify-center rounded p-3 w-auto bg-slate-400 mx-2" style={{ flexDirection:"column" }} >
        <h4 className="font-bold">12</h4>
        <p className="text-sm">Sep</p>
      </div>
    </div>
      <div
        className="flex items-center justify-center"
        style={{ flexDirection: "column" }}
      >
        {predictions?.map((itm, idx) => (
          <ItemPronostico data={itm} key={idx} />
        ))}

        {!userIsLogin && (
          <div
            className="flex w-full text-center p-3 justify-center items-center py-20 rounded mt-3 bg-cyan-700"
            style={{ flexDirection: "column" }}
          >
            <h2>¡No te quedes solo con estas predicciones!</h2>
            <p>
              En {NAME_APP} te puedes registrar de forma gratuita para ver mas
              predicciones.
            </p>
            <Link to={"/accounts/register"}>
              <div class="shadow-2xl mt-2 my-button mx-auto h-16 w-64 bg-blue-600 flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
                <p class="text-center text-white font-semibold my-auto z-10">
                  Obtener mas predicciones
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
