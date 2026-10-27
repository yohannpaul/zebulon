import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { motion } from "motion/react";
import {
  UserSearch,
  FileText,
  TrendingUp,
  HeartHandshake,
  ListChecks,
  ClipboardCheck,
  Search,
  FileSearch,
  Hammer,
  Rocket,
  LifeBuoy,
  ClipboardList,
  UserPlus,
  Handshake,
  Building2,
  Building,
  Landmark,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function HRSolutionsPage() {
  useDocumentMeta(
    "HR Solutions | Zebulon Consulting",
    "From finding the right talent to building effective HR processes, we help organisations manage their people's needs with practical HR support."
  );

  const services = [
    {
      number: "01",
      icon: UserSearch,
      title: "Recruitment & Talent Acquisition",
      description: "Permanent hiring, contract staffing, consultant deployment, candidate sourcing, screening and volume hiring.",
    },
    {
      number: "02",
      icon: FileText,
      title: "HR Policies & Processes",
      description: "HR policies, employee handbooks, SOPs, HR documentation, process development and improvement.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Performance Management",
      description: "Performance frameworks, goal setting, appraisal processes, KPIs and performance improvement systems.",
    },
    {
      number: "04",
      icon: HeartHandshake,
      title: "Employee Engagement & Experience",
      description: "Engagement surveys, employee feedback, retention initiatives, recognition programmes and employee experience.",
    },
    {
      number: "05",
      icon: ListChecks,
      title: "Competency & Role Frameworks",
      description: "Competency mapping, role definitions, job descriptions, skills frameworks and career progression.",
    },
    {
      number: "06",
      icon: ClipboardCheck,
      title: "HR Audits & Advisory",
      description: "HR process reviews, gap assessments, HR function setup, improvement recommendations and ongoing HR guidance.",
    },
  ];

  const businessNeeds = [
    { need: "Starting an HR function", help: "Establishing policies, processes and basic HR frameworks." },
    { need: "Growing the workforce", help: "Recruitment, hiring processes and onboarding." },
    { need: "Improving HR operations", help: "Reviewing and strengthening existing HR practices." },
    { need: "Managing employee performance", help: "Goal setting, appraisal systems and performance frameworks." },
    { need: "Improving employee engagement", help: "Feedback, engagement assessments and action planning." },
    { need: "Building role clarity", help: "Job descriptions, competencies and role expectations." },
  ];

  const workSteps = [
    { icon: Search, label: "Understand", description: "We discuss your organisation, its current HR practices and what needs attention." },
    { icon: FileSearch, label: "Review", description: "We examine existing processes, documentation and gaps." },
    { icon: Hammer, label: "Build", description: "We develop the policies, frameworks or processes required." },
    { icon: Rocket, label: "Implement", description: "We help put the agreed solutions into practice." },
    { icon: LifeBuoy, label: "Support", description: "Where required, we provide ongoing guidance and improvements." },
  ];

  const engagementModels = [
    { icon: ClipboardList, title: "Project-Based HR Support", description: "For specific requirements such as policy development, HR audits or performance management frameworks." },
    { icon: UserPlus, title: "Recruitment Engagements", description: "For individual positions, multiple vacancies or ongoing hiring requirements." },
    { icon: Handshake, title: "Retained HR Advisory", description: "For organisations requiring HR guidance and support over an agreed period." },
    { icon: Building2, title: "HR Function Setup", description: "For growing organisations looking to establish or improve their HR function." },
  ];

  const audiences = [
    { icon: Rocket, title: "Startups & Growing Businesses", description: "Organisations building their first structured HR practices." },
    { icon: Building, title: "Small & Medium Enterprises", description: "Businesses strengthening existing HR processes and people management." },
    { icon: Landmark, title: "Established Organisations", description: "Companies requiring recruitment, HR process improvements or specific HR projects." },
    { icon: Briefcase, title: "HR & Business Leaders", description: "Leaders looking for external expertise or additional support." },
  ];

  return (
    <div className="pt-20">
      <Section className="relative bg-bg-light text-deep-navy pt-40 pb-32 md:pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hr-solutions-hero-illustration.jpg"
            alt="Illustration of HR recruitment and people operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none -z-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl bg-white/20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-deep-navy/10"></div>
        </div>
        <div className="relative text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-12 rounded-3xl inline-block"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-deep-navy max-w-2xl mx-auto">
              Helping you build better HR practices.
            </h1>
            <p className="text-xl text-deep-navy max-w-xl mx-auto">
              From finding the right talent to building effective HR processes, we help
              organisations manage their people's needs with practical HR support.
            </p>
            <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg shadow-xl mt-8">
              <Link to="/contact">
                Talk to Us <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">
            Good HR practices make a difference.
          </h2>
          <p className="text-deep-navy/70 leading-relaxed mb-4">
            As organisations grow, managing people becomes more complex. Hiring, policies,
            performance management and employee engagement all need attention.
          </p>
          <p className="text-deep-navy/70 leading-relaxed">
            We work with organisations to strengthen these areas, whether they need support with
            a specific HR requirement or help setting up and improving their HR function.
          </p>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto mt-8"></div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item) => (
            <motion.div key={item.number} whileHover={{ y: -8 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass group h-full">
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

      <Section className="bg-bg-light">
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Support For Every Stage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">HR Support for Different Business Needs</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {businessNeeds.map((item) => (
            <SpotlightCard key={item.need} color="blue" className="rounded-2xl">
              <div className="glass rounded-2xl p-6 flex gap-4 items-start h-full">
                <div className="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0 mt-0.5">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-deep-navy mb-1">{item.need}</h3>
                  <p className="text-sm text-deep-navy/60 leading-relaxed">{item.help}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard color="gold" className="rounded-2xl h-full">
                <div className="glass p-6 rounded-2xl text-center h-full flex flex-col items-center">
                  <div className="icon-pop w-14 h-14 rounded-full bg-primary-blue/5 flex items-center justify-center mb-4 text-primary-blue">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-2">{step.label}</h3>
                  <p className="text-sm text-deep-navy/60 leading-relaxed">{step.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engagement Models</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <SpotlightCard color="blue" className="rounded-xl h-full">
                <Card className="glass text-center group h-full">
                  <CardContent className="p-7">
                    <div className="icon-pop w-14 h-14 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-5 mx-auto text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-base font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            We Can Keep This Simple
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Work With</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass text-center group h-full">
                  <CardContent className="p-7">
                    <div className="icon-pop w-14 h-14 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-5 mx-auto text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-base font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="relative bg-deep-navy text-white overflow-hidden">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's talk about your HR needs.
          </h2>
          <p className="text-white/60 mb-10">
            Whether you're hiring, setting up HR processes or improving existing practices, tell
            us what you're looking for.
          </p>
          <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg shadow-xl">
            <Link to="/contact">
              Talk to Us <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
