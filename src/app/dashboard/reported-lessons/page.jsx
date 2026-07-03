import AdminRoute from "@/components/auth/AdminRoute";
import ReportedLessons from "@/views/Dashboard/ReportedLessons/ReportedLessons";

export const metadata = {
  title: "Reported Lessons",
};

export default function ReportedLessonsPage() {
  return (
    <AdminRoute>
      <ReportedLessons />
    </AdminRoute>
  );
}
