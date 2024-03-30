import { Montserrat } from "next/font/google";
import Image from "next/image";

const MontFont = Montserrat({subsets:["cyrillic"]})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pb-5 ${MontFont.className} `}>
    <Image src={"/onepiece bg.png"} alt="onepiece" fill className=" object-cover brightness-[0.2]"/>
      <nav className=" flex justify-around items-center p-4 px-6 w-full relative z-10">
        <Image src={"/MUGIWARA PIRATES LOGO.png"} alt="LOGO" width={100} height={100} className="" />
        <h1 className=" lg:text-4xl text-xl text-white font-black">MUGIWARA PIRATES</h1>
      </nav>
      <div className=" w-full grid lg:grid-cols-4 grid-cols-2 gap-4 relative pt-10">
        <h3 className=" absolute top-0 left-1/2 -translate-x-1/2 font-extrabold text-2xl">V1</h3>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://brook-section.netlify.app/">Brook</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://chopper-section.netlify.app/">Chopper</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://franky-section.netlify.app/">Franky</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://jinbe-section.netlify.app/">Jinbe</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://luffy-section.netlify.app/">Luffy</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://nami-section.netlify.app/">Nami</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://robin-section.netlify.app/">Robin</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://sanji-section.netlify.app/">Sanji</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://zoro-section.netlify.app/">Zoro</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://usopp-section.netlify.app/">Usopp</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://collective-section.netlify.app/">Collective Section</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://one-piece-next-ap.vercel.app/">Airdrop</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://address-book-mugi.vercel.app/">Address Book</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://leaderboard-mugi.vercel.app/">LeaderBoard</a></button>
      </div>
      <div className=" w-full grid lg:grid-cols-4 grid-cols-2 gap-4 relative pt-10">
        <h3 className=" absolute top-0 left-1/2 -translate-x-1/2 font-extrabold text-2xl">V2</h3>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://dashboard-mugi.vercel.app/">Dashboard</a></button>
        <button><a className=" text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://staking-mugi.vercel.app/">Staking Central</a></button>
        <button><a className=" pointer-events-none text-xl font-extrabold text-white hover:text-gray-300 hover:underline" href="https://log-overview-mugi.vercel.app/">Log Overview</a></button>
      </div>
    </main>
  );
}
