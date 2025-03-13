import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";
// import Image from "next/image";
import LoginButton from "./LoginButton";

const navLink = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Forums",
    href: "/forum",
  },
  {
    label: "Threads",
    href: "/threads",
  },
];

const AppBar = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm absolute top-0">
      <div className="dropdown navbar-start">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <AlignJustify />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-xl dropdown-content bg-base-100 rounded-box z-1 mt-28 ml-10 w-52 p-2"
        >
          {navLink.map((data, index) => (
            <li key={index}>
              <Link className="text-3xl" href={data.href}>
                {data.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/" className="flex">
        <p className="navbar-center text-xl font-bold">FORUM</p>
      </Link>
      <div className="navbar-end gap-5">
        <LoginButton />
        <Link href="/login" className="btn btn-soft">
          SIGN-UP
        </Link>
      </div>
    </header>
  );
};

export default AppBar;
