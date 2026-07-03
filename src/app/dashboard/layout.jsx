"use client";

import PrivateRoute from "@/components/auth/PrivateRoute";
import DashboardLayout from "@/Layout/DashboardLayout";

export default function DashboardRootLayout({ children }) {
  return (
    <PrivateRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </PrivateRoute>
  );
}
