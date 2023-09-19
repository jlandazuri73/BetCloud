import { useEffect, useState } from "react";
import ItemPronostico from "../shared/itemPronostico";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { NAME_APP } from "../../utils/info";
import { getLast7DaysDates, getMonthInLetters } from "../../utils/date";

export default function Home({ history, vip }) {
  const { predictions, userIsLogin } = useLoaderData();
  const dates = getLast7DaysDates();
  const moths = getMonthInLetters();
  const [searchParams] = useSearchParams();
  const dateURL = searchParams.get("date");
  let bgToday = !dateURL ? "bg-blue-400" : "bg-slate-400";

  return (
    <>
      {!vip && (
      <div className="w-full mb-3 overflow-x-auto">
        <div id="content-ms-history" className="flex w-full  pb-3 items-center justify-start space-x-2">
          <Link
            to={"/"}
            className={`flex-shrink-0 cursor-pointer hover:bg-blue-400 transition items-center justify-center rounded p-3 ${bgToday}`}
            style={{ flexDirection: "column" }}
          >
            <h4 className="font-bold">Hoy</h4>
            <p className="text-sm text-transparent">HOY</p>
          </Link>

          {dates?.map((itm, idx) => {
            const parts = itm?.split("-");
            const day = parts[2];
            const month = parts[1];
            const isActive = dateURL == itm ? true : false;
            return (
              <Link
                to={isActive ? "/" : `/history?date=${itm}`}
                key={idx}
                className={`flex-shrink-0 cursor-pointer hover:bg-blue-400 transition items-center justify-center rounded p-3 bg-${
                  isActive ? "blue" : "slate"
                }-400`}
                style={{ flexDirection: "column" }}
              >
                <h4 className="font-bold">{day}</h4>
                <p className="text-sm">{moths?.[month - 1]?.substring(0, 3)}</p>
              </Link>
            );
          })}
        </div>
      </div>
      )}

      <div
        className="flex items-center justify-center"
        style={{ flexDirection: "column" }}
      >
        {predictions?.length > 0 ? (
          predictions?.map((itm, idx) => (
            <ItemPronostico data={itm} key={idx} />
          ))
        ) : (
          <h3 className="text-center">No se encontraron predicciones...</h3>
        )}

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
              <div className="shadow-2xl mt-2 my-button mx-auto h-16 w-64 bg-blue-600 flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
                <p className="text-center text-white font-semibold my-auto z-10">
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
