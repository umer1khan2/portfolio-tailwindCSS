import Image from "next/image";

import Link from "next/link"

export default function Home() {
  return(
    <main className="bg-yellow-950 text-white	py-20	">
      <div className="flex pl-20 pt-14">
      <div>
      <h1 className="font-semibold text-6xl">Hello, I'm Umer Ullah Khan</h1>
      <h1 className="font-medium text-4xl py-7">FRONTEND DEVELOPER</h1>
      <p className="font-normal text-2xl pb-5">Aspiring Software Developer with a passion for learning and building software solutions. Proficient in basic programming concepts and currently enhancing skills in languages like [ TypeScript, Tailwind-Css and Css]. Eager to contribute to development teams, solve problems, and grow in the field of software development. Motivated to work on real-world projects and collaborate in a dynamic environment.</p>
      <button className="hover:bg-neutral-300 hover:text-black p-3 rounded-3xl my-12 text-xl">
        <Link href="/contact">Contact me</Link>
      </button>
      </div>
      <div>
       <img src="image/pic.jpg" alt="" className=" w-1/2 ml-40 mt-10 rounded-full" />
      </div>
      </div>
    </main>
  )
}

