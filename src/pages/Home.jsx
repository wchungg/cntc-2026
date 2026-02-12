import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.jpg";
import aboutImg from "../assets/about.jpg";

import {
  marqueeText,
  speakerTiles,
  presentedByLogos,
  sponsorLogos,
} from "../data/homeData";

function Marquee({ text }) {
  return (
    <div className="w-full h-12 overflow-hidden bg-[#1F40AF]">
      <div className="marquee-track h-full">
        <span className="marquee-span">{text}</span>
        <span className="marquee-span" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}

function SpeakerTile({ name, img }) {
  return (
    <div className="w-[170px] shrink-0 bg-white shadow-sm ring-1 ring-black/5">
      <div className="h-[120px] w-full overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="px-2 py-2 text-center text-[11px] font-semibold text-gray-900">
        {name}
      </div>
    </div>
  );
}

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={true} />

      {/* HERO */}
      <header className="relative min-h-[540px] md:min-h-[900px]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="CNTC Hero"
            className="h-full w-full object-cover blur-[1.5px] scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
        </div>

        <div className="relative z-20 w-full pl-18 pr-8 pt-40 md:pt-125">
          <div className="max-w-8xl">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
                2026 CALIFORNIA
                <br />
                NEUROTECHNOLOGY
                <br />
                CONFERENCE
              </h1>

              <div className="mt-4 text-2xl leading-6 text-white/80">
                <div>Sunday, April 26th, 2026</div>
                <div>UC Berkeley</div>
              </div>

              <a
                href="https://www.eventbrite.com/e/2026-california-neurotechnology-conference-tickets-1982321023544?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold tracking-wider text-slate-900"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </header>
      <Marquee text={marqueeText} />

      {/* ABOUT SECTION */}
      <section className="w-full px-6 py-14 mt-24 overflow-x-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="relative flex items-center overflow-visible h-[520px]">
            {/* right image */}
            <div className="absolute -right-104 top-1/2 -translate-y-1/2 w-[74vw]">
              <div className="overflow-hidden rounded-[10000px] bg-gray-200">
                <img
                  src={aboutImg}
                  alt="Conference"
                  className="h-[260px] w-full object-cover md:h-[520px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Blue pill overlay */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[-28vw] w-[92vw] md:left-[-22vw] md:w-[78vw] lg:left-[-25vw] lg:w-[70vw]">
              <div className="rounded-[220px] bg-[#5E7FB2] py-12 pl-24 pr-10 md:py-14 md:pl-70 md:pr-12 shadow-sm">
                <h2 className="text-white font-extrabold leading-tight tracking-wide text-[34px] md:text-[42px]">
                  PIONEERING THE FUTURE OF
                  <br />
                  NEUROTECHNOLOGY
                </h2>

                <p className="mt-6 max-w-[520px] text-[18px] md:text-[24px] leading-7 text-white/90">
                  The 4th annual California Neurotechnology <br />
                  Conference is coming to the Bay! Established <br />
                  in 2023, this is the only West-Coast <br />
                  conference bringing together students and <br />
                  experts for a day dedicated to expanding the <br />
                  frontiers of neurotechnology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS STRIP */}
      <section className="w-full px-6 mt-24 pb-16">
        <div className="mx-auto max-w-6xl bg-[#5D77B1] px-6 py-6">
          <div className="text-center text-[40px] font-bold tracking-wider text-white">
            OUR 2026 SPEAKERS
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 overflow-x-auto pb-2">
            {speakerTiles.map((s) => (
              <SpeakerTile key={s.name} name={s.name} img={s.img} />
            ))}
          </div>
        </div>
      </section>

      {/* SLOGAN */}
      <div className="mt-4 text-center font-extrabold text-[55px] leading-tight">
        <p className="bg-gradient-to-r from-[#072A74] to-[#0D4FDA] bg-clip-text text-transparent">
          NEUROTECHNOLOGY INNOVATION:
        </p>

        <p className="italic bg-gradient-to-r from-[#072A74] to-[#0D4FDA] bg-clip-text text-transparent">
          FUTURE POSSIBILITIES & CHALLENGES
        </p>
      </div>

      {/* PRESENTED BY */}
      <section className="w-full px-6 pb-10 mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center text-[40px] font-bold tracking-wider text-[#000000]">
            PRESENTED BY
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center items-center gap-10">
            {presentedByLogos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt="Presented by"
                className={`${logo.size || "h-23"} object-contain`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORED BY */}
      <section className="w-full px-0 pb-14 mt-16">
        <div className="mx-auto ">
          <div className="text-center text-[40px] font-bold tracking-wider text-[#000000]">
            SPONSORED BY
          </div>

          <div className="flex flex-wrap items-center justify-center gap-20 -mt-3">
            {sponsorLogos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt="Sponsor"
                className={`${logo.size || "h-64"} object-contain`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="h-28 w-full bg-[#082E7E]" />
    </div>
  );
};
