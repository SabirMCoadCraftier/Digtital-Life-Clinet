"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AuthSessionSync from "@/components/providers/AuthSessionSync";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <AuthSessionSync>
        <QueryClientProvider client={queryClient}>
          {children}
          <ToastContainer />
        </QueryClientProvider>
      </AuthSessionSync>
    </ThemeProvider>
  );
};

export default Providers;
