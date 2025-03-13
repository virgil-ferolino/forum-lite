"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  const { data: session } = useSession();
  return session?.user ? (
    <button className="btn btn-ghost" onClick={() => signOut()}>
      LOGOUT
    </button>
  ) : (
    <button className="btn btn-neutral" onClick={() => signIn()}>
      LOGIN
    </button>
  );
};

export default LoginButton;
