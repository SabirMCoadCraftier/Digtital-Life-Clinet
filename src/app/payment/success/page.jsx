import { Suspense } from "react";
import PrivateRoute from "@/components/auth/PrivateRoute";
import PaymentSuccess from "@/views/Dashboard/Payment/PaymentSuccess/PaymentSuccess";
import LoadingSpinner from "@/Component/LoadingSpenner/LoadingSpenner";

export const metadata = {
  title: "Payment Successful",
  description: "Your premium payment was successful.",
};

export default function PaymentSuccessPage() {
  return (
    <PrivateRoute>
      <Suspense fallback={<LoadingSpinner />}>
        <PaymentSuccess />
      </Suspense>
    </PrivateRoute>
  );
}
