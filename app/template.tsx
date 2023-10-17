import Header from "@/components/Header";

export default function MainTemplate({children}) {
  return (
    <div>
      <div className="px-2">
        {children}
      </div>
    </div>
  )
}