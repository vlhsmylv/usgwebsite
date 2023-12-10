"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="p-3 bg-red-500 text-white rounded-xl"
    >
      Sign out
    </button>
  );
};

export default SignOut;
