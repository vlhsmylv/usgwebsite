import { getServerSessionHook } from "@/hooks/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSessionHook();

  if (session) redirect("/dashboard/featured");
  else redirect("/dashboard/login");
};

export default page;
