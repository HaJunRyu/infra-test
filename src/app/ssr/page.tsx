import { fetchPosts } from '@/api/posts';

export default async function SsrPage() {
  const posts = await fetchPosts({ isSsr: true });

  return (
    <div>
      {posts.map(post => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
}
