import { useEffect, useState } from "react";
import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      text: "The leadership programme Zebulon built for our managers was structured, practical, and immediately useful on the job.",
      author: "Rajesh M.",
      role: "L&D Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "They helped us put real HR processes in place without slowing the business down.",
      author: "Priya S.",
      role: "HR Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Zebulon didn't just tell us what was wrong — they helped us build the way forward.",
      author: "Anil K.",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Clear, honest advisory work. They understood our context before recommending anything.",
      author: "Sunita R.",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    const onReInit = () => {
      setScrollSnaps(api.scrollSnapList());
      onSelect();
    };

    onReInit();
    api.on("select", onSelect);
    api.on("reInit", onReInit);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  return (
    <Section backdrop={<GradientBackdrop variant="light" />}>
      <div className="text-center mb-16">
        <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Success Stories</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
        <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
      </div>

      <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="max-w-6xl mx-auto">
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <SpotlightCard color="gold" className="rounded-[32px] h-full">
                <div className="glass p-8 rounded-[32px] relative group h-full">
                  <Quote className="text-primary-blue/10 absolute top-6 right-6 group-hover:text-primary-blue/30 group-hover:scale-110 group-hover:rotate-3 transition-all" size={64} />
                  <div className="flex gap-1 text-gold-accent mb-4 relative z-10">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base text-deep-navy/80 italic mb-10 leading-relaxed relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 border-2 border-gold-accent shadow-md">
                      <AvatarImage src={t.image} alt={t.author} referrerPolicy="no-referrer" />
                      <AvatarFallback>
                        {t.author.split(" ").map((w) => w[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-deep-navy text-lg">{t.author}</p>
                      <p className="text-sm text-primary-blue font-bold uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center gap-6 mt-10">
          <CarouselPrevious className="glass static translate-y-0 border-none hover:scale-110 hover:shadow-lg transition-all" />

          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                  selectedIndex === index ? "w-8 bg-primary-blue" : "w-2.5 bg-deep-navy/20 hover:bg-deep-navy/40"
                }`}
              />
            ))}
          </div>

          <CarouselNext className="glass static translate-y-0 border-none hover:scale-110 hover:shadow-lg transition-all" />
        </div>
      </Carousel>
    </Section>
  );
}
