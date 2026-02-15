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
    <div className="min-h-screen flex flex-col bg-[#F2F2F2] fade-in">
      {/* Top */}
      <div className="bg-[#DDE9FF]">
        <Navbar transparent={false} />
      </div>

      {/* Main content grows */}
      <main className="flex-grow mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <h1 className="text-center text-6xl font-extrabold text-black">
          SPONSORS
        </h1>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          <SponsorCard src={emotiv} alt="Emotiv" />
          <SponsorCard src={openwater} alt="Openwater" />
        </div>

        <div className="mt-12 flex justify-center">
          <SponsorCard src={ceribell} alt="Ceribell" />
        </div>
      </main>

      {/* Footer bar pinned properly */}
      <div className="h-24 w-full bg-[#082E7E]" />
    </div>
  );
};

