import { fetchPosts } from '@/api/posts';

export default async function CsrPage() {
  const posts = await fetchPosts({ isSsr: false });

  return (
    <div>
      {posts.map(post => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
}
