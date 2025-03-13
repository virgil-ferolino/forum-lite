"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const onSubmit = async () => {
    await signIn("credentials", {
      username: credentials.username,
      password: credentials.password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <form className="flex flex-col gap-5" action={onSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-xl">Username</legend>
          <input
            type="text"
            name="username"
            className="input w-full border-4"
            placeholder="username..."
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            value={credentials.username}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-xl">Password</legend>
          <input
            type="password"
            name="password"
            className="input w-full border-4"
            placeholder="password..."
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
          />
        </fieldset>

        <button type="submit" className="btn btn-primary mt-10">
          SIGN-IN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
