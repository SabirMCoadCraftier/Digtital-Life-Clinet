import { Suspense } from "react";
import Register from "@/views/Auth/Register/Register";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";

export const metadata = {
  title: "Register",
  description: "Create your Digital Life Lessons account.",
};

export default function RegisterPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Register />
    </Suspense>
  );
}
