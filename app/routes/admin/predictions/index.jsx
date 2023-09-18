import TablePredictionsAdmin from "../../../components/admin/predictions/table";
import { requireAdminSession } from "../../../data/accounts.server";
import { getPredictions } from "../../../data/admin/predictions.server";

export default function Index() {
  return <TablePredictionsAdmin />;
}

export async function loader({ request }) {
  const userId = await requireAdminSession(request);
  const data = await getPredictions();

  return data || [];
}
