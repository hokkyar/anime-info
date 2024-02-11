import Link from "next/link"

export default function Navbar(): JSX.Element {
  return (
    <nav className="p-5 shadow-lg text-indigo-600 font-bold">
      <Link href='/'>INFO ANIME</Link>
    </nav>
  )
}