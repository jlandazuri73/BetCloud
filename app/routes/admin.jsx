import { Outlet, useNavigation } from "@remix-run/react";
import LayoutAdmin from "../components/layout/admin/layout";
import styles from "../styles/layoutAdmin.css";
import { requireAdminSession } from "../data/accounts.server";
import { getUser } from "../data/user.server";
import Preload from "../components/shared/preload";
import stylesApp from "../styles/app.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesApp },
];

export default function AdminPageLayout() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  return (
    <>
      {isSubmitting ? (
        <Preload />
      ) : (
        <LayoutAdmin>
          <Outlet />
        </LayoutAdmin>
      )}
    </>
  );
}

export async function loader({ request }) {
  const userId = await requireAdminSession(request);
  const user = await getUser(userId);

  return {
    user,
  };
}
