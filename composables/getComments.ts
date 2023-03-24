import type { Comment } from "~/types";

export default function (postId: number) {
  // Não usar `await` com useLazyFetch
  const { error, pending, data } = useLazyFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return { error, pending, data };
}
