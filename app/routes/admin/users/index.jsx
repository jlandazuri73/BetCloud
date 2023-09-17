import TableUsersAdmin from "../../../components/admin/users/table";
import { requireAdminSession } from "../../../data/accounts.server";
import { getUsers } from "../../../data/admin/users.server";

export default function Index() {
  return <TableUsersAdmin />;
}

export async function loader({ request }) {
  const userId = await requireAdminSession(request);
  const users = await getUsers();
  return users;
}
