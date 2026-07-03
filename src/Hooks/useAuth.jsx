"use client";

import { authClient } from "@/lib/auth-client";

const mapUser = (sessionUser) => {
  if (!sessionUser) return null;

  return {
    uid: sessionUser.id,
    email: sessionUser.email,
    displayName: sessionUser.name,
    photoURL: sessionUser.image,
  };
};

const useAuth = () => {
  const { data: session, isPending, refetch } = authClient.useSession();
  const user = mapUser(session?.user);

  const signInUser = async (email, password) => {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message || "Login failed");
    }

    if (data?.token) {
      localStorage.setItem("access-token", data.token);
    }

    await refetch();
    return data;
  };

  const createUser = async (email, password, profile = {}) => {
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name: profile.name || profile.displayName || email.split("@")[0],
      image: profile.photoURL || profile.image,
    });

    if (error) {
      throw new Error(error.message || "Registration failed");
    }

    if (data?.token) {
      localStorage.setItem("access-token", data.token);
    }

    await refetch();
    return data;
  };

  const signInWithGoogle = async (callbackURL = "/") => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL,
    });
  };

  const logOut = async () => {
    await authClient.signOut();
    localStorage.removeItem("access-token");
    await refetch();
  };

  const updateUserProfile = async (nameOrProfile, imageUrl) => {
    const updates =
      typeof nameOrProfile === "object"
        ? {
            name: nameOrProfile.displayName || nameOrProfile.name,
            image: nameOrProfile.photoURL || nameOrProfile.image,
          }
        : {
            name: nameOrProfile,
            image: imageUrl,
          };

    const { error } = await authClient.updateUser(updates);

    if (error) {
      throw new Error(error.message || "Profile update failed");
    }

    await refetch();
  };

  return {
    user,
    loading: isPending,
    signInUser,
    createUser,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };
};

export default useAuth;
