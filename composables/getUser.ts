import type { User } from "~/types";

export default async function (userId: number) {
  const { data: userData } = await useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return userData;
}
