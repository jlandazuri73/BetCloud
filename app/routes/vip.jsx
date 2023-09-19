import { useNavigation } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import Preload from "../components/shared/preload";
import Home from "../components/home/home";
import Layout from "../components/layout/layout";
import { loaderForHome } from "../data/home.server";
import styles from "../styles/app.css";
import { requireUserSession } from "../data/accounts.server";

export default function VIPPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <>
      {isSubmitting ? (
        <Preload />
      ) : (
        <Layout vip>
          <Home vip />
        </Layout>
      )}
    </>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  const data = await loaderForHome(request, "VIP");
  if (data?.redirect) return redirect(data?.redirect);
  else return data;
}
