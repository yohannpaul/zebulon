import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import { Building2 } from "lucide-react";

export default function ClientLogos() {
  const placeholders = Array.from({ length: 10 }, (_, i) => `Client ${String(i + 1).padStart(2, "0")}`);
  // Duplicate the list back-to-back for a seamless marquee loop
  const marqueeItems = [...placeholders, ...placeholders];
  const marqueeItemsReversed = [...marqueeItems].reverse();

  return (
    <Section backdrop={<GradientBackdrop variant="light" />}>
      <div className="text-center mb-12">
        <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
          Trusted By
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">Organisations We've Worked With</h2>
      </div>

      <div className="space-y-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="flex items-center gap-3 glass text-deep-navy/50 px-8 py-5 rounded-2xl grayscale flex-shrink-0 border border-transparent hover:grayscale-0 hover:scale-105 hover:border-primary/30 transition-all duration-300"
              >
                <Building2 size={22} />
                <span className="font-bold uppercase tracking-wider text-sm whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
            {marqueeItemsReversed.map((label, index) => (
              <div
                key={`${label}-rev-${index}`}
                className="flex items-center gap-3 glass text-deep-navy/50 px-8 py-5 rounded-2xl grayscale flex-shrink-0 border border-transparent hover:grayscale-0 hover:scale-105 hover:border-primary/30 transition-all duration-300"
              >
                <Building2 size={22} />
                <span className="font-bold uppercase tracking-wider text-sm whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
