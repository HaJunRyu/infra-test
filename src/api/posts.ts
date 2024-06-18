export const fetchPosts = async ({ isSsr }: { isSsr: boolean }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: isSsr ? 'no-store' : 'default',
  });

  const posts = (await res.json()) as Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;

  return posts;
};
