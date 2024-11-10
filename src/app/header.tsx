import Link from "next/link"

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between pl-20 h-20 items-center bg-yellow-800 text-gray-50	">
                <div>
                    <h1 className="font-semibold text-3xl">Umer's Portfolio</h1>
                </div>

                <div>
                    <ul className="flex pr-10 space-x-12 text-2xl">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Me</Link></li>
                        <li><Link href="/contact">Contact Me</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
} 