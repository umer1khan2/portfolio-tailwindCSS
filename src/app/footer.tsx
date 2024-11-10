import Link from "next/link"
export default function Footer(){
    return(
        <footer className="bg-yellow-950 text-white h-20 pt-5">
            <div className="flex justify-center space-x-10 text-lg">
                <Link href="">Facebook</Link>
                <Link href="">Instagram</Link>
                <Link href="">Linkedln</Link>
            </div>
        </footer>
    )
}