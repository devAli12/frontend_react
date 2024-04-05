import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";

export function useBooks() {
  const {
    isLoading,
    data:data,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  console.log("inside hook"+data);
  return { isLoading, error, data};
}
