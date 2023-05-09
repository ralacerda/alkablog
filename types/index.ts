export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// There are more values in the API
// but we are only using the following
export type User = {
  name: string;
  username: string;
  email: string;
};
