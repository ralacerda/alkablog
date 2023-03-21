import type { Post } from "~/types";

export default async function (postId: number) {
  const { data: post } = await useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return post;
}
