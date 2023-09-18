import { redirect } from "@remix-run/node";
import FormPredictionsAdmin from "../../../../components/admin/predictions/form";
import { requireAdminSession } from "../../../../data/accounts.server";
import {
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
  if (request.method === "PATCH") {
    await updatePrediction(formData, predictionId);
    return redirect("/admin/predictions");
  }
  return null;
}
