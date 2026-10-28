import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import StatementBlock from "./StatementBlock";
import GlowCTAButton from "./GlowCTAButton";
import { motion } from "motion/react";
import { Search, Target, Lightbulb, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function AboutPage() {
  useDocumentMeta(
    "About Us | Zebulon Consulting",
    "Zebulon Consulting helps organisations develop their people, strengthen HR practices and improve business performance through Learning, HR Solutions and People Advisory."
  );

  const principles = [
    {
      number: "01",
      icon: Search,
      title: "Understand Before We Recommend",
      description: "We take the time to understand your business, your people and the challenges you face before suggesting solutions.",
    },
    {
      number: "02",
      icon: Target,
      title: "Keep It Practical",
      description: "We focus on solutions that make sense, are easy to apply and work in real business situations.",
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Challenge When It Matters",
      description: "We ask questions, challenge assumptions and share different perspectives when we believe there's a better way forward.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Focus on What Changes",
      description: "It's not just about delivering a service. It's about the difference it makes to your people and your business.",
    },
  ];

  return (
    <div className="pt-20">
      <Section className="relative overflow-hidden bg-bg-light pt-28 pb-16 md:pt-36 md:pb-20" backdrop={<GradientBackdrop variant="light" />}>
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="h-auto gap-2 pl-3 pr-4 py-2 text-sm font-bold border-primary/20 bg-primary/10 text-primary rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
              </span>
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-deep-navy leading-[1.1] mb-4">
              About Zebulon
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-primary-blue mb-8">
              People. Performance. Progress.
            </p>
            <GlowCTAButton to="/contact">
              Start a Conversation <ArrowRight size={20} />
            </GlowCTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shine-sweep aspect-video">
              <img
                src="/images/about-hero-illustration.jpg"
                alt="Illustration representing Zebulon Consulting's people-first approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent"></div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-full bg-gold-accent flex items-center justify-center text-deep-navy shrink-0">
                <Handshake size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-deep-navy leading-none">People First</p>
                <p className="text-[11px] uppercase tracking-wider text-deep-navy/50 font-bold">Our Approach</p>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <StatementBlock eyebrow="Who We Are" heading="Developing people. Strengthening organisations.">
          <p>
            Zebulon Consulting helps organisations develop their people, strengthen HR practices and
            improve business performance.
          </p>
          <p>
            Through Learning, HR Solutions and People Advisory, we help businesses find the right
            talent, build capabilities and address people-related challenges.
          </p>
          <p>
            We take the time to understand each organisation's needs before recommending practical,
            relevant solutions.
          </p>
        </StatementBlock>
      </Section>

      <Section className="bg-bg-light">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-[32px] shadow-2xl shine-sweep bg-bg-light">
            <img
              src="/images/about-story-illustration.jpg"
              alt="Zebulon Consulting's journey of growth and transformation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div>
            <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6 leading-tight">
              Built on Experience. Driven by Purpose.
            </h2>
            <div className="space-y-4 text-deep-navy/70 leading-relaxed">
              <p>Zebulon Consulting started with a simple ambition to build something different.</p>
              <p>
                Over the years, working with different organisations, we noticed a common gap. Training
                programmes often focused on delivery rather than results. People challenges were met with
                standard solutions, and businesses struggled to find partners who truly understood their
                needs.
              </p>
              <p>We believed there was a better way to do things.</p>
              <p>
                We wanted to build a business that takes the time to understand challenges, asks the right
                questions and offers solutions that actually work.
              </p>
              <p>
                What started as an idea has grown into Zebulon Consulting, bringing together Learning, HR
                Solutions and People Advisory to support organisations with their people and business
                challenges.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden" backdrop={<GradientBackdrop variant="light" />}>
        <div className="text-center mb-14 relative z-10">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            What We Believe
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">The Principles Behind Our Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <SpotlightCard color={index % 2 === 0 ? "blue" : "gold"} className="rounded-xl h-full">
                <Card className="glass group h-full overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${index % 2 === 0 ? "bg-primary-blue" : "bg-gold-accent"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="icon-pop w-14 h-14 bg-primary-blue/5 rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                        <item.icon size={26} />
                      </div>
                      <span className="font-serif font-bold text-3xl text-primary-blue/15">{item.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light relative overflow-hidden">
        <StatementBlock eyebrow="Our Experience" heading="Experience Across People, Teams and Organisations">
          <p>
            Our experience spans leadership development, learning, HR operations, people management and
            organisational capability.
          </p>
          <p>
            Having worked across industries and international markets, we bring an understanding of
            business challenges and the people behind them.
          </p>
          <p>This experience helps us develop practical solutions that fit each organisation's needs.</p>
        </StatementBlock>
      </Section>

      <Section dark className="relative overflow-hidden text-center" backdrop={<GradientBackdrop variant="dark" />}>
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-4 block">
            Let's Work Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Good conversations lead to better solutions.
          </h2>
          <p className="text-white/60 mb-10">
            Whether you're looking to develop your people, strengthen HR practices or address an
            organisational challenge, we'd be happy to understand what you need.
          </p>
          <GlowCTAButton to="/contact">
            Start a Conversation <ArrowRight size={20} />
          </GlowCTAButton>
        </div>
      </Section>
    </div>
  );
}
