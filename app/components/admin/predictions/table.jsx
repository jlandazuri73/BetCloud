import React from "react";
import ItemPronostico from "../../shared/itemPronostico";
import { Link, useLoaderData } from "@remix-run/react";

export default function TablePredictionsAdmin() {
  const data = useLoaderData();
  return (
    <>
      <div className="flex justify-between items-center border-b mb-3  border-white ">
        <Link to={"add"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Agregar
          </button>
        </Link>
      </div>
      {data?.map((itm, idx) => (
        <Link to={itm?.id || ""} key={idx}>
          <ItemPronostico data={itm} />
        </Link>
      ))}
    </>
  );
}
