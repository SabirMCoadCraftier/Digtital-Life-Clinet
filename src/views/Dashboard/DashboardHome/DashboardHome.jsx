"use client";

import React from "react";
import useRole from "@/Hooks/useRole";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";
import DashboardHomeAdmin from "./DashboardHomeAdmin";
import UserDashboardHome from "./UserDashboardHome";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) return <LoadingSpinner />;
  if (role === "admin") {
    return <DashboardHomeAdmin></DashboardHomeAdmin>;
  } else {
    return <UserDashboardHome></UserDashboardHome>;
  }
};

export default DashboardHome;
