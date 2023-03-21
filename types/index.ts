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

// Há mais informações presentes no API
// mas essas são as informações necessárias para a implementação atual
export type User = {
  name: string;
  username: string;
  email: string;
};
