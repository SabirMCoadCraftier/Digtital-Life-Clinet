import AdminRoute from "@/components/auth/AdminRoute";
import ManageLessons from "@/views/Dashboard/ManageLessons/ManageLessons";

export const metadata = {
  title: "Manage Lessons",
};

export default function ManageLessonsPage() {
  return (
    <AdminRoute>
      <ManageLessons />
    </AdminRoute>
  );
}
