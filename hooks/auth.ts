import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const getServerSessionHook = async () => {
  const session = await getServerSession(authOptions);

  return session;
};
