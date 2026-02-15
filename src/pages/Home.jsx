import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.jpg";
import aboutImg from "../assets/about.jpg";

import {
  marqueeText,
  speakerTiles,
  presentedByLogos,
  sponsorLogos,
} from "../data/homeData";

/* -----------------------------
   Marquee
----------------------------- */
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

/* -----------------------------
   Large Profile Card (Screenshot Style)
----------------------------- */
function ProfileCard({ name, img }) {
  return (
    <div className="shrink-0 snap-start">
      <div className="w-[260px] sm:w-[300px] md:w-[320px]">
        <div className="overflow-hidden rounded-[28px] shadow-md bg-gray-100">
          <img
            src={img}
            alt={name}
            className="h-[200px] sm:h-[220px] md:h-[240px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-4 text-center text-[22px] sm:text-[24px] font-medium text-black">
          {name}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
   Carousel Section
----------------------------- */
function CardCarouselSection({ title, items }) {
  const scrollerRef = useRef(null);

  const scrollByCards = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({
      left: 340 * dir,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-6 mt-24 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center text-[40px] font-bold tracking-wider text-black">
          {title}
        </div>

        <div className="relative mt-8">
          <div
            ref={scrollerRef}
            className="flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {items.map((item, i) => (
              <ProfileCard key={i} name={item.name} img={item.img} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollByCards(1)}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/10 hover:shadow-lg active:scale-95 transition"
          >
            →
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/10 hover:shadow-lg active:scale-95 transition"
          >
            ←
          </button>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Home Page
----------------------------- */
export const Home = () => {
  const headingRef = useRef(null);
  const [transform, setTransform] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const mid = viewportH * 0.55;
      const delta = mid - rect.top;
      const progress = Math.max(0, Math.min(1, delta / 220));

      const scale = 1 + 0.12 * Math.sin(progress * Math.PI);
      const tx = 18 * Math.sin(progress * Math.PI);
      const ty = -10 * Math.sin(progress * Math.PI);

      setTransform(`translate(${tx}px, ${ty}px) scale(${scale})`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const speakerItems = useMemo(
    () =>
      speakerTiles.map((s) => ({
        name: s.name,
        img: s.img,
      })),
    []
  );

  const sponsorItems = useMemo(
    () =>
      sponsorLogos.map((l, i) => ({
        name: l.name || `Sponsor ${i + 1}`,
        img: l.src,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-white fade-in">
      <Navbar transparent={true} />

      {/* HERO */}
      <header className="relative min-h-[540px] md:min-h-[900px]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="CNTC Hero"
            className="h-full w-full object-cover blur-[1.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
        </div>

        <div className="relative z-20 w-full pl-18 pr-8 pt-40 md:pt-125">
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
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold tracking-wider text-slate-900"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </header>

      <Marquee text={marqueeText} />

      {/* ABOUT SECTION — fixed layout + nicer pill */}

      {/* ABOUT SECTION — refined proportions */}
      <section className="w-full mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-10">

            {/* LEFT BLUE PILL (ends before image) */}
            <div className="flex-1">
              <div className="bg-[#5E7FB2] rounded-r-[240px] px-16 py-16 shadow-sm">
                <h2 className="text-white font-extrabold tracking-wide leading-[1.05] text-[46px]">
                  PIONEERING THE FUTURE OF
                  <br />
                  NEUROTECHNOLOGY
                </h2>

                <p className="mt-6 text-white/90 text-[20px] leading-8 max-w-[560px]">
                  The 4th annual California Neurotechnology Conference is coming to the Bay!
                  Established in 2023, this is the only West-Coast conference bringing together
                  students and experts for a day dedicated to expanding the frontiers of
                  neurotechnology.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE (separate, no overlap) */}
            <div className="w-[46%]">
              <div className="overflow-hidden rounded-[420px] shadow-sm bg-gray-200">
                <img
                  src={aboutImg}
                  alt="Conference"
                  className="h-[520px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>





      <CardCarouselSection
        title="OUR 2026 SPEAKERS"
        items={speakerItems}
      />

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

      <div className="h-28 w-full bg-[#082E7E]" />
    </div>
  );
};
