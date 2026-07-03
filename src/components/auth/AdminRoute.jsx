"use client";

import useAuth from "@/Hooks/useAuth";
import useRole from "@/Hooks/useRole";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";
import Forbidden from "@/Component/Forbidden/Forbidden";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || (user?.email && roleLoading)) {
    return <LoadingSpinner />;
  }

  if (role !== "admin") {
    return <Forbidden />;
  }

  return children;
};

export default AdminRoute;
