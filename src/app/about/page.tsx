import Image from "next/image";

export default function About() {
    return (
        <div className="justify-center bg-yellow-950 text-white py-10">

          <div className="flex justify-center font-semibold text-6xl mt-10">
                <h1 className="">About Me</h1>
         </div>
            
         <div className="flex justify-center pt-20 pb-20">

         <div className="w-1/2 mx-20">


                <h1 className="font-medium text-4xl mt-10">FRONTEND DEVELOPER</h1>

                <p className="mt-10 font-normal text-2xl"> I am a skilled Frontend Developer with a strong command of TypeScript and extensive experience working with Next.js. With a passion for building interactive, high-performance web applications, I focus on writing clean, scalable code and ensuring optimal user experiences. My expertise in these technologies allows me to craft seamless, responsive UIs while keeping performance and best practices at the forefront.</p>
         </div>
         <div className="w-1/2  ml-40 ">
              <Image src="image/pic2.webp" alt="" className="rounded-full h-96 "/>
         </div>
         </div>

         <div className="flex justify-center font-bold text-3xl my-14">
                <h1>My Projects</h1>
            </div>
            <div className="flex justify-evenly items-center">
                <div className=" p-8 shadow-2xl">
                    <Image src="/image/calculator.png" alt="" />
                    <h4>calculator</h4>
                </div>
                <div className="p-8 shadow-2xl">
                    <Image src="/image/numberguessing.webp" alt="" className="h-56"/>
                    <h4>Number guessing game</h4>
                </div>
                <div className="p-3 shadow-2xl ">
                    <Image src="/image/atm2.png" alt="" className="h-72 " />
                    <h4>Atm</h4>
                </div>
            </div>
        </div>
    )
}