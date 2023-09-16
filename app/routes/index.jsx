import { redirect } from "@remix-run/node";
import Home from "../components/home/home";
import Layout from "../components/layout/layout";
import { getUserFromSession, isLogin } from "../data/accounts.server";
import { getUser } from "../data/user.server";
import { isValidVIP } from "../data/validation/accounts";
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
  let user = {};
  if (userId) {
    user = await getUser(userId);
    const validVIP = isValidVIP(user);
    if (!validVIP?.ok) {
      return redirect(`/validation/pay-required?type=${validVIP?.sms}`);
    }
  }
  return { userIsLogin, user };
}
