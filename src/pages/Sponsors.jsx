import Navbar from "../components/Navbar";

import emotiv from "../assets/logos/sponsor-emotiv.png";
import openwater from "../assets/logos/sponsor-openwater.png";
import ceribell from "../assets/logos/sponsor-ceribell.png";

function SponsorCard({ src, alt, imgSize = "max-h-[80%]" }) {
  return (
    <div
      className="
        w-full max-w-[640px]
        aspect-[3/1]
        bg-white
        rounded-2xl
        shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
        ring-1 ring-black/5
        flex items-center justify-center
        overflow-hidden
      "
    >
      <img
        src={src}
        alt={alt}
        className={`${imgSize} w-auto object-contain`}
        loading="lazy"
      />
    </div>
  );
}

export const Sponsors = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] fade-in">
      <Navbar transparent={false} />

      <main className="mx-auto w-full max-w-8xl px-16 pt-28 pb-24">
        <h1 className="mt-10 text-center text-[61px] font-bold text-black">
          SPONSORS
        </h1>

        <div className="mt-12 grid gap-15 md:grid-cols-2 justify-items-center">
          <SponsorCard
            src={emotiv}
            alt="Emotiv"
            imgSize="max-h-[100%] scale-200"
          />
          <SponsorCard
            src={openwater}
            alt="Openwater"
            imgSize="max-h-[100%] scale-140"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <SponsorCard src={ceribell} alt="Ceribell" imgSize="max-h-[90%]" />
        </div>
      </main>

      {/* footer bar */}
      <div className="mt-10 h-28 w-full bg-[#082E7E]" />
    </div>
  );
};
