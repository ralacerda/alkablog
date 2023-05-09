import type { Comment } from "~/types";

export default function (postId: number) {
  // Don't use `wait` with useLazyFetch
  const { error, pending, data } = useLazyFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return { error, pending, data };
}
