import { redirect } from "@remix-run/node";
import PayRequired from "../../components/validation/pay-required";
import { getUserFromSession } from "../../data/accounts.server";
import { getUser, updateUserisVIP } from "../../data/user.server";

export default function PayRequiredPage() {
  return <PayRequired />;
}

export async function loader({ request }) {
  const userId = await getUserFromSession(request);
  let user = {};
  if (userId) {
    user = await getUser(userId);
  }
  return { user };
}

export async function action({ request }) {
  const userId = await getUserFromSession(request);
  await updateUserisVIP(false, userId);
  return redirect("/");
}