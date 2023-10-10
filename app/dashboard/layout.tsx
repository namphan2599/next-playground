import Link from "next/link"

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h2>DashBoard</h2>
      {children}
    </div>
  )
}