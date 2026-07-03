"use client";

import Link from "next/link";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-3xl font-bold text-red-500 mb-2">
        You are Forbidden to Access This Page
      </h2>
      <p className="text-green-600 mb-6 text-center">
        Please contact the administrator if you believe this is an error.
      </p>

      <div className="flex gap-3">
        <Link href="/" className="btn btn-secondary text-primary">
          Go to Home
        </Link>
        <Link href="/dashboard" className="btn btn-primary text-white">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
