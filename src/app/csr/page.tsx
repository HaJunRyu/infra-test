import { fetchPosts } from '@/api/posts';
import Link from 'next/link';

export default async function CsrPage() {
  const posts = await fetchPosts({ isSsr: false });

  return (
    <div>
      <Link href="/ssr">
        <h2>
          SSR <span>-&gt;</span>
        </h2>
      </Link>

      {posts.map(post => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
}
