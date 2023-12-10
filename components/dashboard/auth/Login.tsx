"use client";

import { toastConfig } from "@/toast";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [promising, setPromising] = useState(false);

  const styles = {
    group: "flex flex-col gap-3",
    input: "p-3 border rounded-xl min-w-[270px]",
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username || !password) {
      console.log("Please, fill username and password fields");
    }

    try {
      setPromising(true);

      await signIn("credentials", {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
    } catch (err: any) {
      return toast.error(err.message, toastConfig);
    }
  };

  return (
    <>
      {promising ? <></> : <></>}
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-7 border rounded-xl px-10 py-6"
      >
        <div className="flex justify-center">
          <Image src={"/usg.png"} width={125} height={125} alt="USG" />
        </div>
        <div className={styles.group}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username..."
            className={styles.input}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password..."
            className={styles.input}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 px-7 py-3 rounded-xl text-white">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
