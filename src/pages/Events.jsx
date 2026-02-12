import Navbar from "../components/Navbar";
import eventHero from "../assets/eventHero.png";
import { schedule } from "../data/eventsData";
import mapImg from "../assets/map.png";

export const Events = () => {
  return (
    <div className="min-h-screen fade-in">
      <Navbar transparent={false} />

      {/* HERO */}
      <header className="relative h-[690px] w-full">
        <img
          src={eventHero}
          alt="events"
          className="h-full w-full object-cover object-[50%_10%]"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex">
          <div className="mx-auto w-full mt-128">
            <div className="ml-auto pl-36 text-left">
              <h1 className="text-[60px] font-bold text-white">SCHEDULE</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-30 lg:grid-cols-[420px_1fr] lg:items-start">
          {/* Location Card */}
          <div className="w-full max-w-[420px]">
            <div className="text-[40px] font-extrabold leading-[1.05] text-black whitespace-pre-line">
              International House <br />
              at UC Berkeley
            </div>

            <div className="mt-4 text-[20px] text-[#3D3D3D]">
              2299 Piedmont Ave, Berkeley, CA 94720
            </div>

            <div
              className="
                mt-8
                w-[451px]
                h-[539px]
                overflow-hidden
                rounded-[26px]
                ring-1 ring-black/10
                shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
              "
            >
              <img
                src={mapImg}
                alt="Map"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Schedule Card */}
          <div
            className="
              w-full
              rounded-[22px]
              bg-[#E7ECF4]
              ring-1 ring-black/10
              border-[#E7ECF4]
              shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
              px-8 py-7
            "
          >
            <div className="space-y-7">
              {schedule.map((block) => (
                <div
                  key={block.time}
                  className="grid grid-cols-[200px_1fr] gap-8"
                >
                  <div className="text-[20px] font-bold text-[#0B2A76]">
                    {block.time}
                  </div>

                  <div className="space-y-4">
                    {block.sessions.map((s, idx) => (
                      <div key={s.title + idx}>
                        <div className="whitespace-pre-line text-[26px] font-bold leading-[1.15] text-[#0B0B0B]">
                          {s.title}
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-[20px] italic text-[#6B6B6B]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-[#6B6B6B]"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 2c-3.86 0-7 3.14-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                          </svg>
                          <span>{s.loc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 h-28 w-full bg-[#082E7E]" />
    </div>
  );
};
