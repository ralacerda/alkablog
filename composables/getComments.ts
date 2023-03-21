import type { Comment } from "~/types";

export default async function (postId: number) {
  const { data: commentList } = await useFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return commentList;
}
