import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import Home from "./components/home";
import { authOptions } from "./api/auth/[...nextauth]/auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/main");
  } else {
    return (
      <>
        <Home />
      </>
    )
  }
}
