import type { Comment } from "~/types";

export default function (postId: number) {
  // A gente não precisa de `await` com useLazyFetch
  const {
    error,
    pending,
    data: commentList,
  } = useLazyFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return { error, pending, commentList };
}
