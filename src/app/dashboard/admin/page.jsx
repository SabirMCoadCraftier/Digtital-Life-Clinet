import AdminRoute from "@/components/auth/AdminRoute";
import AdminProfile from "@/views/Dashboard/Profile/AdminProfile";

export const metadata = {
  title: "Admin Profile",
};

export default function AdminProfilePage() {
  return (
    <AdminRoute>
      <AdminProfile />
    </AdminRoute>
  );
}
