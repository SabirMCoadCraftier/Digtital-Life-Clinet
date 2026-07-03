import { Suspense } from "react";
import Login from "@/views/Auth/Login/Login";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";

export const metadata = {
  title: "Login",
  description: "Sign in to your Digital Life Lessons account.",
};

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Login />
    </Suspense>
  );
}
