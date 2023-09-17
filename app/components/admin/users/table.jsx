import { useLoaderData } from "@remix-run/react";
import { isValidVIP } from "../../../data/validation/accounts";
import { calculateDaysDifference } from "../../../utils/date";

export default function TableUsersAdmin() {
  const data = useLoaderData();
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Usuarios en la APP
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Correo</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Rol</th>
                  <th>Dias faltantes</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Correo</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Rol</th>
                  <th>Dias faltantes</th>
                </tr>
              </tfoot>
              <tbody>
                {data?.map((itm, idx) => {
                  const isVIP = isValidVIP(itm)?.ok;
                  const days =
                    calculateDaysDifference(
                      new Date(itm?.datePayment)
                        ?.toISOString()
                        ?.substring(0, 10)
                    ) || null;
                  return (
                    <tr key={idx}>
                      <td>{itm?.email || ""}</td>
                      <td>{itm?.name || ""}</td>
                      <td>{isVIP ? "VIP" : "GRATIS"}</td>
                      <td>{itm?.role?.name}</td>
                      <td>{isVIP ? (30 - days)  : "No aplica"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
