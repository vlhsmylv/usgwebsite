import { SignOut } from "@/components/dashboard";
import { getServerSessionHook } from "@/hooks/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSessionHook();

  if (session)
    return (
      <section>
        Dashboard section
        <div>
          <SignOut />
        </div>
      </section>
    );

  redirect("/dashboard/login");
};

export default page;
