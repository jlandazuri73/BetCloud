import { json } from "@remix-run/node";
import { destroyUserSession } from "../data/accounts.server";

export function action({ request }) {
  if (request.method !== "POST") {
    throw json({ message: "Metodo invalido" }, { status: 400 });
  }

  return destroyUserSession(request);
}
