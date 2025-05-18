import Head from "next/head";
import Image from "next/image";
import landingImg from "../public/Image/landingImg.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujita Pandey</title>
      </Head>

      <main className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-40 bg-gray-50 text-gray-800 font-sans overflow-hidden">

       <section className="md:w-1/2 flex flex-col justify-center space-y-6 z-10 wave-on-hover">
  <h1 className="text-xl md:text-2xl font-light text-gray-600 tracking-wide mt-30 md:mt-0">
    <span className="wave-emoji">👋</span> Hello, I'm
  </h1>


          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
            Sujita Pandey
          </h2>

          <h3 className="text-2xl text-indigo-600 italic font-semibold tracking-wide">
          Web Developer
          </h3>

          <p className="max-w-lg text-gray-600 text-base leading-relaxed text-justify">
            I’m a <span className="text-indigo-600 font-medium">BCA student</span> dedicated to building clean and user-friendly websites. I believe simplicity is the ultimate sophistication, and creativity is in every detail.
          </p>
<div className="flex gap-1">

     <button className="relative h-13 min-w-[180px] px-1 bg-primary hover:bg-indigo-700 text-white rounded-full shadow-md transition duration-300 font-medium flex items-center select-none group">
  <span className="absolute left-2/5 -translate-x-1/2 pointer-events-none">Let’s Connect</span>
  <span className="ml-auto w-11 h-11 rounded-full bg-white text-indigo-600 flex items-center justify-center transition-transform duration-500 group-hover:rotate-360">
    <FaAngleDoubleRight size={24} />
  </span>
</button>

   
</div>
        </section>

        {/* Right Section */}
        <section className="md:w-1/2 flex flex-col items-center justify-center mt-12 md:mt-0 z-10 ">
          <div className="relative w-62 h-62 md:w-80 md:h-80 rounded-full shadow-lg ring-4 ring-indigo-200 overflow-hidden">
            <Image
              src={landingImg}
              alt="Sujita Pandey"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
          <p className="mt-6 text-gray-500 italic tracking-wide text-center text-sm md:text-base">
            -- Currently pursuing BCA 📚 --
          </p>
        </section>

        {/* Subtle geometric background shapes */}
        <div className="hidden md:block absolute top-10 left-10 w-48 h-48 bg-indigo-100 rounded-xl rotate-12 opacity-30 pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-36 h-36 bg-indigo-200 rounded-xl -rotate-6 opacity-20 pointer-events-none"></div>

      </main>
    </>
  );
}
