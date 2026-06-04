import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";
import { User } from "../types/types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    select: (data: User[]) => data,
  });
}
