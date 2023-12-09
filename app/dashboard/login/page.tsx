import { Login } from "@/components/dashboard";
import { getServerSessionHook } from "@/hooks/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSessionHook();

  if (!session)
    return (
      <div className="flex justify-center items-center lg:min-h-screen py-16">
        <Login />
      </div>
    );

  redirect("/dashboard/featured");
};

export default page;
