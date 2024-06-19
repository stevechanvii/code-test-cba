"use client";

import Link from "next/link";

// import { useQueryPets } from "@/hooks/query/useQueryPets";

export default function Home() {
  // const { data } = useQueryPets();
  // console.log(data);

  return (
    <main className="flex justify-center items-center h-full">
      {/* <h1>index</h1> */}
      <Link href="/melbourne">melbourne</Link>
    </main>
  );
}
