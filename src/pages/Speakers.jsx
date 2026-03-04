import Navbar from "../components/Navbar";
import speakersHero from "../assets/speakersHero.jpg";
import {
  keystoneSpeakers,
  Innovation_Future_Possibilities_Panelists,
  Innovation_Constraints_Panelists,
  Academic_Workshop_Panelists,
  Entrepreneurship_Workshop_Panelists,
  BCI_competition_judges,
} from "../data/speakerData";

function Tag({ label }) {
  const base =
    "inline-flex items-center rounded-full px-2 py-[2px] text-[10px] font-semibold";

  const styles = {
    Engineering: "bg-[#FFCDC8] text-[#C20000]",
    "AI Humanities": "bg-[#FFC5A6] text-[#7E3400]",
    Industry: "bg-[#C1DDE2] text-[#005C6E]",
    Neuro: "bg-[#0055AF] text-[#B8E1F9]",
    "Keynote Speaker": "bg-[#FFE497] text-[#4A371D]",

    // Innovation / Future Possibilities
    "Precision neurology": "bg-[#D9F5E5] text-[#0F5A36]",
    "Parkinson's care": "bg-[#E3F2FF] text-[#0A4A8A]",
    "Cognitive neuroscience": "bg-[#EFE1FF] text-[#5A2D91]",
    "ADHD therapy": "bg-[#FFE1EC] text-[#8A1F4D]",
    "Focused ultrasound": "bg-[#DFF7F4] text-[#0C6B63]",
    Neuromodulation: "bg-[#E8F0FF] text-[#1E4FA8]",
    "Neural interfaces": "bg-[#E6ECFF] text-[#233F9A]",
    Neurorehabilitation: "bg-[#EAF7E1] text-[#3C6F12]",

    // Innovation / Constraints
    Neuroethics: "bg-[#FFE8F3] text-[#7A1F4A]",
    "Disability studies": "bg-[#F4F2E6] text-[#6A5A20]",
    "Music/speech perception": "bg-[#E6F7FF] text-[#0E5C73]",
    Bioethics: "bg-[#FDEED9] text-[#7A4300]",
    "Moral psychology": "bg-[#EEE8FF] text-[#4A2F88]",

    // Academic Workshop
    "Human-AI interaction": "bg-[#E6F0FF] text-[#204FA3]",
    Accessibility: "bg-[#E7F9EF] text-[#0C6B3F]",
    "Human-centered AI": "bg-[#EAF3FF] text-[#1D4E89]",
    Neuroscience: "bg-[#E8EDFF] text-[#2D3F91]",
    Vision: "bg-[#FFF3D9] text-[#7A5A00]",

    // Entrepreneurship Workshop
    Entrepreneurship: "bg-[#FFE6CC] text-[#7A3D00]",
    "Attention science": "bg-[#F0E6FF] text-[#5A2E91]",
    Commercialization: "bg-[#DDF3FF] text-[#005C7A]",
    "Go-to-market": "bg-[#E5FFF1] text-[#0B6B3A]",
    Neurotech: "bg-[#E6EBFF] text-[#2A3E96]",
    Product: "bg-[#FFF1E0] text-[#7A4A10]",
    "Machine learning": "bg-[#E6F7FF] text-[#005E8A]",
    EEG: "bg-[#E8F4FF] text-[#1F5D9A]",

    // BCI competition
    "Clinical neurotech": "bg-[#EAF5FF] text-[#0F4D8A]",
    Epilepsy: "bg-[#FFE8E8] text-[#8A1F1F]",
    BCI: "bg-[#E6EEFF] text-[#234C9A]",
    Neuroengineering: "bg-[#E7F3FF] text-[#1A5A8A]",
    "Motor control": "bg-[#EAF9E6] text-[#2F6B1A]",
    "Deep learning": "bg-[#E6F0FF] text-[#1C4F9A]",
  };

  return (
    <span className={`${base} ${styles[label] || "bg-gray-100 text-gray-700"}`}>
      {label}
    </span>
  );
}

function SpeakerCard({ img, name, title, tags, variant = "panelist" }) {
  const isKeystone = variant === "keystone";

  const initials = (name || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div
      className={[
        isKeystone ? "w-full max-w-[315px]" : "w-[315px]",
        "bg-[#F5F6F7] ring-1 ring-black/10 shadow-[4px_4px_10px_rgba(0,0,0,0.25)]",
      ].join(" ")}
    >
      <div className="h-[320px] w-full overflow-hidden bg-gray-100">
        {img ? (
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-5xl font-bold text-black/30">{initials}</div>
          </div>
        )}
      </div>

      {/* CHANGED: h-[136px] -> min-h-[136px] so tags never spill outside */}
      <div className="px-4 py-4 min-h-[136px]">
        <div className="text-[26px] font-semibold text-black">{name}</div>
        <div className="mt-1 text-[17px] leading-5 text-[#6B6B6B]">{title}</div>

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
    <div className="min-h-screen bg-white fade-in">
      <Navbar transparent={false} />

      {/* HERO */}
      <header className="relative h-[690px] w-full">
        <img
          src={speakersHero}
          alt="Speakers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center px-8">
          <div className="mx-auto w-full max-w-7xl mt-98">
            <div className="ml-auto max-w-md text-right">
              <h1 className="text-[60px] font-bold text-white">OUR SPEAKERS</h1>
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
            <h2 className="text-[55px] font-bold text-black">
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

      {/* INNOVATION: FUTURE POSSIBILITIES */}
      <div className="mx-auto w-full max-w-7xl mt-20">
        <section className="grid items-start gap-12 md:grid-cols-[220px_1fr]">
          <div className="pt-8 md:-ml-16 ml-6">
            <h2 className="text-[40px] font-bold text-black">
              NEUROENGINEER
              <br />
              PANELISTS
            </h2>
          </div>

          <div className="grid gap-y-10 md:gap-x-32 sm:gap-x-10 px-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
            {Innovation_Future_Possibilities_Panelists.map((p) => (
              <SpeakerCard
                key={p.name}
                img={p.img}
                name={p.name}
                title={p.title}
                tags={p.tags}
              />
            ))}
          </div>
        </section>
      </div>

      {/* INNOVATION: CONSTRAINTS */}
      <div className="mx-auto w-full max-w-7xl mt-20">
        <section className="grid items-start gap-12 md:grid-cols-[220px_1fr]">
          <div className="pt-8 md:-ml-16 ml-6">
            <h2 className="text-[50px] font-bold text-black">
              NEUROETHIC
              <br />
              PANELISTS
            </h2>
          </div>

          <div className="grid gap-y-10 md:gap-x-32 sm:gap-x-10 px-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
            {Innovation_Constraints_Panelists.map((p) => (
              <SpeakerCard
                key={p.name}
                img={p.img}
                name={p.name}
                title={p.title}
                tags={p.tags}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ACADEMIC WORKSHOP */}
      <div className="mx-auto w-full max-w-7xl mt-20">
        <section className="grid items-start gap-12 md:grid-cols-[220px_1fr]">
          <div className="pt-8 md:-ml-16 ml-6">
            <h2 className="text-[50px] font-bold text-black">
              ACADEMIC
              <br />
              WORKSHOP
            </h2>
          </div>

          <div className="grid gap-y-10 md:gap-x-32 sm:gap-x-10 px-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
            {Academic_Workshop_Panelists.map((p) => (
              <SpeakerCard
                key={p.name}
                img={p.img}
                name={p.name}
                title={p.title}
                tags={p.tags}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ENTREPRENEURSHIP WORKSHOP */}
      <div className="mx-auto w-full max-w-7xl mt-20">
        <section className="grid items-start gap-12 md:grid-cols-[220px_1fr]">
          <div className="pt-8 md:-ml-16 ml-6">
            <h2 className="text-[42px] font-bold text-black">
              ENTREPRENEUR
              <br />
              WORKSHOP
            </h2>
          </div>

          <div className="grid gap-y-10 md:gap-x-32 sm:gap-x-10 px-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
            {Entrepreneurship_Workshop_Panelists.map((p) => (
              <SpeakerCard
                key={p.name}
                img={p.img}
                name={p.name}
                title={p.title}
                tags={p.tags}
              />
            ))}
          </div>
        </section>
      </div>

      {/* BCI COMPETITION JUDGES */}
      <div className="mx-auto w-full max-w-7xl mt-20">
        <section className="grid items-start gap-12 md:grid-cols-[220px_1fr]">
          <div className="pt-8 md:-ml-16 ml-6">
            <h2 className="text-[50px] font-bold text-black">
              BCI
              <br />
              COMPETITION
              <br />
              JUDGES
            </h2>
          </div>

          <div className="grid gap-y-10 md:gap-x-32 sm:gap-x-10 px-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
            {BCI_competition_judges.map((p) => (
              <SpeakerCard
                key={p.name}
                img={p.img}
                name={p.name}
                title={p.title}
                tags={p.tags}
              />
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-28 w-full bg-[#082E7E] text-white">
        <div className="mx-auto max-w-8xl px-10 py-7 flex items-center justify-between">
          <p className="text-sm">© 2026 CNTC</p>

          <div className="text-sm opacity-80 text-right flex flex-col">
            <span>Developed by</span>
            <span>Siddhant Subramanian and William Chung (NeuroTech@UCSB)</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
