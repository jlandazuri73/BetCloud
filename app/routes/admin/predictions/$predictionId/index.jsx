import { redirect } from "@remix-run/node";
import FormPredictionsAdmin from "../../../../components/admin/predictions/form";
import { requireAdminSession } from "../../../../data/accounts.server";
import {
  deletePrediction,
  getPrediction,
  updatePrediction,
} from "../../../../data/admin/predictions.server";

export default function Index() {
  return <FormPredictionsAdmin edit />;
}

export async function loader({ request, params }) {
  const userId = await requireAdminSession(request);
  const { predictionId } = params;
  const prediction = await getPrediction(predictionId);
  return prediction || {};
}

export async function action({ request, params }) {
  const userId = await requireAdminSession(request);
  const { predictionId } = params;
  const formData = Object.fromEntries(await request.formData());

  // Editar prediccion
  if (request.method === "PATCH") {
    await updatePrediction(formData, predictionId);
    return redirect("/admin/predictions");
  }
  // Eliminar prediccion
  if (request.method === "DELETE") {
    await deletePrediction(predictionId);
    return redirect("/admin/predictions");
  }
  return null;
}
