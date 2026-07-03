"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import { authClient } from "@/lib/auth-client";

const AuthSessionSync = ({ children }) => {
  const { data: session } = authClient.useSession();
  const syncedUserId = useRef(null);

  useEffect(() => {
    const token = session?.session?.token;

    if (session?.user && token) {
      localStorage.setItem("access-token", token);

      if (syncedUserId.current !== session.user.id) {
        syncedUserId.current = session.user.id;
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
        if (baseURL) {
          axios
            .post(
              `${baseURL}/users`,
              {
                email: session.user.email,
                displayName: session.user.name,
                photoURL: session.user.image,
              },
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            )
            .catch(() => {});
        }
      }
    } else if (!session) {
      localStorage.removeItem("access-token");
      syncedUserId.current = null;
    }
  }, [session]);

  return children;
};

export default AuthSessionSync;
