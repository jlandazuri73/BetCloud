import { redirect } from "@remix-run/node";
import Home from "../components/home/home";
import Layout from "../components/layout/layout";
import styles from "../styles/app.css";
import { useNavigation } from "@remix-run/react";
import Preload from "../components/shared/preload";
import { loaderForHome } from "../data/home.server";

export default function Index() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <>
      {isSubmitting ? (
        <Preload />
      ) : (
        <Layout>
          <Home />
        </Layout>
      )}
    </>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];

export async function loader({ request }) {
  const data = await loaderForHome(request, "FREE");
  if (data?.redirect) return redirect(data?.redirect);
  else return data;
}
