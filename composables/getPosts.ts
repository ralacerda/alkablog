import type { Post } from "~/types";

export default async function () {
  const { data: posts } = await useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return posts;
}
