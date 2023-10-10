import Link from "next/link";

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
      <Link href="/posts">Posts List</Link>
      <h1>Title: {postData.title}</h1>
      <p>Body: {postData.body}</p>
    </div>
  )
}