import Link from "next/link";


export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }


  const posts = await res.json();

  return posts.map((post) => ({ id: post.id.toString()}));
}



async function getPostById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function Post({params}) {

  const postData = await getPostById(params.id)
  return (
    <div>
      <Link href="/posts"> &larr; Back</Link>
      <h1>Title: {postData.title}</h1>
      <p>Body: {postData.body}</p>
    </div>
  );
}