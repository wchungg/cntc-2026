import Navbar from '../components/Navbar'
import aboutHero from "../assets/aboutHero.jpg";

import { members } from '../data/aboutData';

function MemberCard({ name, school, img }) {
  return (
    <div className="h-[350px] w-[266px] overflow-hidden rounded-[2px] bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.25)]">
      <div className="h-[260px] w-full bg-[#C4C4C4]">
        {img ? (
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-center h-[100px] px-4 pb-3 bg-[#F5F6F7]">
        <div className="text-[22px] font-semibold leading-[18px] text-black">
          {name}
        </div>
        <div className="mt-4 text-[16px] leading-[14px] text-[#6B6B6B]">
          {school}
        </div>
      </div>
    </div>
  );
}

export const About = () => {
  return <div className='min-h-screen'>
    <Navbar transparent={false} />
    
    {/* HERO */}
    <header className="relative h-[690px] w-full">
      <img
        src={aboutHero}
        alt="About us"
        className="h-full w-full object-cover object-[30%_80%]"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex">
        <div className="mx-auto w-full max-w-6xl mt-36">
          <div className="ml-auto max-w-md text-right">
            <h1 className="text-[60px] font-bold text-white">
              ABOUT US
            </h1>
            <p className="text-[20px] leading-5 text-white/85">
              Established in 2023, CNTC is California's <br />
              Only Student-Run Annual Neurotechnology 
              Conference.
            </p>
          </div>
        </div>
      </div>
    </header>

    <div className="mt-20 mx-auto w-full max-w-[1200px]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-10 gap-y-10">
        {members.map((m) => (
          <MemberCard key={m.name} name={m.name} school={m.school} img={m.img} />
        ))}
      </div>
    </div>

    <div className="mt-28 h-28 w-full bg-[#082E7E]" />

  </div>
}
