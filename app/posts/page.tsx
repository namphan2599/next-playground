import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PostsPage() {

  const posts = await getPosts();
  
  return (
    <div>
      <h1>Posts lists</h1>
      <Link href="/posts/create">New post</Link>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}