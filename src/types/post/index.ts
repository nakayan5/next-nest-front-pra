export type Post = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
  published: boolean;
  viewCount: number;
  authorId: number | null;
};
