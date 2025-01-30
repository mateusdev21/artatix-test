import { redirect } from "next/navigation";

export default function Home() {
  const isAuth = true;

  if (!isAuth) {
    redirect("/auth/login");
  } else {
    redirect("/dashboard");
  };

  return null;
}
