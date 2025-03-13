"use client";
import { useSession } from "next-auth/react";
import React from "react";

const HomePage = () => {
  const { data: session } = useSession();
  return session?.user ? (
    <>UNAUTHORIZED ACCESS!!</>
  ) : (
    <div>HOME PAGE: WE&apos;LLCUM!!</div>
  );
};

export default HomePage;
