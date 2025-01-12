import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook as deleteBookApi } from "../../services/apiBooks";
import { toast } from "react-hot-toast";

export function useDeleteBook() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBookMutation } = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      toast.success("book successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBook:deleteBookMutation };
}
