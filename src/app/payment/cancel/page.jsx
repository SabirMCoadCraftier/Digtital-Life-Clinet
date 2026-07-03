import PrivateRoute from "@/components/auth/PrivateRoute";
import PaymentCancel from "@/views/Dashboard/Payment/PaymentCancel/PaymentCancel";

export const metadata = {
  title: "Payment Cancelled",
  description: "Your payment was cancelled.",
};

export default function PaymentCancelPage() {
  return (
    <PrivateRoute>
      <PaymentCancel />
    </PrivateRoute>
  );
}
