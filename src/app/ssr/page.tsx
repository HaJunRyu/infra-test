import { fetchPosts } from '@/api/posts';
import Link from 'next/link';

export default async function SsrPage() {
  const posts = await fetchPosts({ isSsr: true });

  return (
    <div>
      <Link href="/csr">
        <h2>
          CSR <span>-&gt;</span>
        </h2>
      </Link>

      {posts.map(post => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  );
}
