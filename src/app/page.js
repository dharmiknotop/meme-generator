"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  // hooks
  const router = useRouter();
  router.push("/memes");

  return <main>Redirecting to meme page</main>;
}
