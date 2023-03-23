import type { Post } from "~/types";

export default async function () {
  const { data, error } = await useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return { data, error };
}
