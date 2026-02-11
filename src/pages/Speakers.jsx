import Navbar from "../components/Navbar";
import speakersHero from "../assets/speakersHero.jpg";
import { keystoneSpeakers, panelists } from "../data/speakerData";

function Tag({ label }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-[2px] text-[10px] font-semibold";

  const styles = {
    Engineering: "bg-[#FFCDC8] text-[#C20000]",
    "AI Humanities": "bg-[#FFC5A6] text-[#7E3400]",
    Industry: "bg-[#C1DDE2] text-[#005C6E]",
    Neuro: "bg-[#0055AF] text-[#B8E1F9]",
    "Keynote Speaker": "bg-[#FFE497] text-[#4A371D]",
  };

  return (
    <span className={`${base} ${styles[label] || "bg-gray-100 text-gray-700"}`}>
      {label}
    </span>
  );
}

function SpeakerCard({ img, name, title, tags, variant = "panelist" }) {
  const isKeystone = variant === "keystone";

  return (
    <div
      className={[
        isKeystone ? "w-full max-w-[315px]" : "w-[315px]",
        "bg-white ring-1 ring-black/10 shadow-[4px_4px_10px_rgba(0,0,0,0.25)]",
      ].join(" ")}
    >
      <div className="h-[320px] w-full overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="px-4 py-4 h-[136px] bg-[#F5F6F7]">
        <div className="text-[26px] font-semibold text-black">{name}</div>
        <div className="mt-2 text-[17px] leading-4 text-[#6B6B6B]">
          {title}
        </div>

        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const Speakers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar transparent={false} />

      {/* HERO */}
      <header className="relative h-[680px] w-full">
        <img
          src={speakersHero}
          alt="Speakers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl mt-90">
            <div className="ml-auto max-w-md text-right">
              <h1 className="text-[60px] font-bold text-white">
                OUR SPEAKERS
              </h1>
              <p className="text-[20px] leading-5 text-white/85">
                Explore the brilliant minds at CNTC, driving <br />
                innovation in neurotechnology and <br />
                neuroscience in academia and industry.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* KEYSTONE */}
      <div className="mt-14 mx-auto w-full max-w-6xl px-6 py-16">
        <section className="grid items-center gap-10 md:grid-cols-[360px_1fr]">
          <div className="pt-10">
            <h2 className="text-[55px] font-bold text-slate-900">
              KEYSTONE
              <br />
              SPEAKERS
            </h2>
          </div>

          <div className="grid w-full gap-14 justify-center sm:grid-cols-2">
            {keystoneSpeakers.map((s) => (
              <SpeakerCard
                key={s.name}
                img={s.img}
                name={s.name}
                title={s.title}
                variant="keystone"
              />
            ))}
          </div>
        </section>
      </div>

      {/* PANELISTS */}
      <div className="mx-auto w-full max-w-7xl mt-20">
        <section className="grid items-start gap-12 md:grid-cols-[220px_1fr]">
          <div className="pt-8 md:-ml-16">
            <h2 className="text-[50px] font-bold text-black">
              PANELISTS
            </h2>
          </div>

          <div className="grid gap-y-10 md:gap-x-32 sm:gap-x-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
            {panelists.map((p) => (
              <SpeakerCard
                key={p.name + p.img}
                img={p.img}
                name={p.name}
                title={p.title}
                tags={p.tags}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="mt-28 h-28 w-full bg-[#082E7E]" />
    </div>
  );
};
