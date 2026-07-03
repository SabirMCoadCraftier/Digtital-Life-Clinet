import AdminRoute from "@/components/auth/AdminRoute";
import ManageUsers from "@/views/Dashboard/ManageUsers/ManageUsers";

export const metadata = {
  title: "Manage Users",
};

export default function ManageUsersPage() {
  return (
    <AdminRoute>
      <ManageUsers />
    </AdminRoute>
  );
}
