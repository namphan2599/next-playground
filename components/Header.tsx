import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-2">
      <ul className="flex justify-end">
        <li className="mx-3">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-3">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="mx-3">
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}