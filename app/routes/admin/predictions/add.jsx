import { redirect } from "@remix-run/node";
import FormPredictionsAdmin from "../../../components/admin/predictions/form";
import { createPrediction } from "../../../data/admin/predictions.server";
import { requireAdminSession } from "../../../data/accounts.server";

export default function Add() {
  return <FormPredictionsAdmin />;
}

export async function action({ request }) {
  const userId = await requireAdminSession(request);
  const formData = Object.fromEntries(await request.formData());
  if (request.method === "POST") {
    await createPrediction(formData);
    return redirect("/admin/predictions");
  }
  return null;
}
