import { Form, useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";

export default function FormPredictionsAdmin({ edit }) {
  const dataEdit = useLoaderData();
  const defaultValues = {
    team_local: dataEdit?.team_local || "",
    team_visiting: dataEdit?.team_visiting || "",
    ligue: dataEdit?.ligue || "",
    ligue_img: dataEdit?.ligue_img || "",
    hour: dataEdit?.hour || "",
    prediction: dataEdit?.prediction,
    odds: dataEdit?.odds || "",
    status_prediction: dataEdit?.status_prediction || "",
    type_user: dataEdit?.type_user || "",
    gols_local: dataEdit?.gols_local || "",
    gols_visiting: dataEdit?.gols_visiting || "",
  };
  const [isFinished, setisFinished] = useState(false);

  const changeStatusPrediction = (e) => {
    const value = e?.target?.value || null;
    if (value == "WON" || value == "LOST") {
      setisFinished(true);
    } else {
      setisFinished(false);
    }
  };

  useEffect(() => {
    if (edit) {
      if (
        defaultValues?.status_prediction == "WON" ||
        defaultValues?.status_prediction == "LOST"
      ) {
        setisFinished(true);
      } else {
        setisFinished(false);
      }
    }
  }, []);

  return (
    <>
      <div className="container text-white">
        <Form method={edit ? "PATCH" : "POST"}>
          <h2>{edit ? "Editar pronóstico" : "Nuevo pronóstico"} </h2>
          <div className="h-0.5 w-full bg-white my-3"></div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="first">Equipo Local</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del equipo local"
                  id="first"
                  name="team_local"
                  required
                  defaultValue={defaultValues?.team_local}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="last">Equipo visitante</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del equipo visitante"
                  id="last"
                  name="team_visiting"
                  required
                  defaultValue={defaultValues?.team_visiting}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="company">Liga</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la liga"
                  id="company"
                  name="ligue"
                  required
                  defaultValue={defaultValues?.ligue}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Bandera del pais de la liga</label>
                <input
                  type="url"
                  className="form-control"
                  id="phone"
                  placeholder="Dirección de imagen en PNG"
                  name="ligue_img"
                  required
                  defaultValue={defaultValues?.ligue_img}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Hora del partido (00:00)</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Hora en formato: 00:00"
                  name="hour"
                  defaultValue={defaultValues?.hour}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="url">Predicción</label>
                <input
                  className="form-control"
                  id="url"
                  name="prediction"
                  placeholder="Pronóstico"
                  defaultValue={defaultValues?.prediction}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Cuota</label>
                <input
                  type="number"
                  className="form-control"
                  id="email"
                  placeholder="Cuota"
                  name="odds"
                  step={0.01}
                  required
                  defaultValue={defaultValues?.odds}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="company">Estado de la predicción</label>
                <select
                  className="form-control"
                  id="company"
                  name="status_prediction"
                  required
                  onInput={changeStatusPrediction}
                  defaultValue={defaultValues?.status_prediction}
                >
                  <option value="IN PROGRESS">En curso</option>
                  <option value="WON">Ganada</option>
                  <option value="LOST">Perdida</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Para quien es la predicción</label>
                <select
                  className="form-control"
                  required
                  id="phone"
                  name="type_user"
                  defaultValue={defaultValues?.type_user}
                >
                  <option value="FREE">Usuario Gratis</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>
            </div>
          </div>

          {isFinished && (
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="company">Goles local</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Goles marcados"
                    id="company"
                    name="gols_local"
                    required
                    defaultValue={defaultValues?.gols_local}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Goles visitante</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Goles marcados"
                    name="gols_visiting"
                    required
                    defaultValue={defaultValues?.gols_visiting}
                  />
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {edit ? "Actualizar" : "Guardar"}
          </button>
        </Form>
      </div>
    </>
  );
}
