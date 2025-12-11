import { Title } from "./Title";

const targetingPoints = [
  {
    title: "Targeting & Personalization",
    description:
      "Utilize advanced targeting based on location data, demographics, and time to reach hyper-specific customer profiles.",
  },
  {
    title: "Consumer Interaction",
    description:
      "Leverage QR codes, AR, and touch-ready displays to convert passive viewers into engaged participants and customers.",
  },
  {
    title: "Cost-Effectiveness",
    description:
      "Invest in flexible digital canvases that deliver higher ROI and can be redeployed or updated without production waste.",
  },
];

const visibilityHighlights = [
  {
    title: "Engagement & Visibility",
    description:
      "High-resolution, dynamic displays capture up to 400% more views than static placements while blending into the urban journey.",
  },
  {
    title: "Content Flexibility",
    description:
      "Update messaging instantly in response to events or dayparts so you always deliver the most relevant creative.",
  },
];

export const Benefits = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-24">
      <div className="pointer-events-none absolute -right-16 top-0 hidden h-64 w-64 rounded-full bg-[#ffe1d7] blur-3xl lg:block" />
      <div className="pointer-events-none absolute -left-10 bottom-4 hidden h-52 w-52 rounded-full bg-[#fff5e8] blur-3xl lg:block" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <Title subtitle="The DOOH canvas lets you mix storytelling, technology, and precision reach in real time.">Benefits</Title>

        <div className="mt-16 flex flex-col gap-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-8 text-lg text-[#444444]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff5f2f]">Precision DOOH</p>
                <h3 className="mt-4 text-[32px] font-semibold text-[#1c1c1c]">Targeting & Personalization</h3>
                <p className="mt-2 text-base leading-relaxed text-[#5a5a5a]">
                  Blend geo-context, dayparting, and device-level insights to serve the right story on the right panel exactly
                  when your audience is most receptive.
                </p>
              </div>
              <ul className="space-y-6">
                {targetingPoints.map((point) => (
                  <li key={point.title} className="leading-relaxed">
                    <span className="font-semibold text-[#111111]">{point.title}:</span> {point.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex justify-end">
              <div className="relative w-full max-w-[520px] overflow-hidden rounded-[36px] border border-[#f3f3f3] bg-[#fafafa] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1400&auto=format&fit=crop"
                  alt="Digital display engaging an outdoor audience"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
              <PixelAccent className="absolute -bottom-6 left-6" />
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-[520px] overflow-hidden rounded-[36px] border border-[#f3f3f3] bg-[#fafafa] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1400&auto=format&fit=crop"
                  alt="Interactive signage experience inside a retail location"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
              <PixelAccent className="absolute -bottom-5 right-6" />
            </div>
            <div className="order-1 space-y-7 text-lg text-[#444444] lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f2542d]">
                Benefits of Digital Out-of-Home (DOOH) Advertising
              </p>
              <h3 className="text-[32px] font-semibold leading-snug text-[#1c1c1c]">
                Blend immersive visuals with dynamic scheduling to stay relevant at every moment.
              </h3>
              <ul className="space-y-6">
                {visibilityHighlights.map((point) => (
                  <li key={point.title} className="leading-relaxed">
                    <span className="font-semibold text-[#111111]">{point.title}:</span> {point.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PixelAccent = ({ className = "" }: { className?: string }) => {
  const palette = ["#ff5f2f", "#ff8a3c", "#ffb85c", "#ffe6a3"];

  return (
    <div className={`grid grid-cols-4 gap-[3px] ${className}`}>
      {Array.from({ length: 16 }).map((_, index) => (
        <span
          key={index}
          className="block h-3 w-3 rounded-[4px]"
          style={{
            backgroundColor: palette[Math.floor(index / 4)],
            opacity: 1 - (index % 4) * 0.15,
          }}
        />
      ))}
    </div>
  );
};
