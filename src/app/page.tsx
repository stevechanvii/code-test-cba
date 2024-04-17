"use client";

import { useQueryPets } from "@/hooks/query/useQueryPets";

export default function Home() {
  const { data } = useQueryPets();
  console.log(data);

  return <main className="flex">test</main>;
}
