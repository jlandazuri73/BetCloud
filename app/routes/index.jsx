import Home from "../components/home/home";
import Layout from "../components/layout/layout";
import { getUserFromSession, isLogin } from "../data/accounts.server";
import { getUser } from "../data/user.server";
import styles from "../styles/app.css";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];

export async function loader({ request }) {
  const userIsLogin = await isLogin(request);
  const userId = await getUserFromSession(request);
  const user = await getUser(userId);
  return { userIsLogin, user };
}
