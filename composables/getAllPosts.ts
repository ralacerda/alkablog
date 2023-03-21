import type { Post } from "~/types";

export default async function () {
  const { data: postList } = await useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return postList;
}
