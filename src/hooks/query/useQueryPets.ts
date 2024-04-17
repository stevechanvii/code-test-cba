"use client";

import { getPets } from "@/api/petApi";
import { useQuery } from "@tanstack/react-query";

export const GET_PETS = "GetPets";

export function useQueryPets() {
  return useQuery({
    queryKey: [GET_PETS],
    queryFn: async () => {
      const { data } = await getPets();
      if (data) return data;
    },
  });
}
