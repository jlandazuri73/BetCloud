import { useNavigation } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import Preload from "../components/shared/preload";
import Home from "../components/home/home";
import Layout from "../components/layout/layout";
import { loaderForHome } from "../data/home.server";
import styles from "../styles/app.css";

export default function HistoryPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <>
      {isSubmitting ? (
        <Preload />
      ) : (
        <Layout>
          <Home history />
        </Layout>
      )}
    </>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const date_URL = searchParams.get("date") || null;
  if(!date_URL) return redirect("/");

  const data = await loaderForHome(request, date_URL);
  if (data?.redirect) return redirect(data?.redirect);
  else return data;
}
