import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Linkedin, Instagram, Facebook, Calendar, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // Each service column links to its page and lists that page's real
  // offerings underneath, the same set used in the homepage hero graphic.
  const serviceColumns = [
    {
      name: "Learning",
      href: "/learning",
      items: ["Corporate Training", "Leadership Development", "Workshops", "Coaching"],
    },
    {
      name: "HR Solutions",
      href: "/hr-solutions",
      items: ["Recruitment", "HR Policies & Process", "Performance Management", "Employee Engagement"],
    },
    {
      name: "People Advisory",
      href: "/people-advisory",
      items: ["L&D Strategy", "Capability Building", "Organisation Development", "Performance Consulting"],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin size={18} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={18} /> },
    { name: "Facebook", href: "#", icon: <Facebook size={18} /> },
    { name: "TopMate", href: "#", icon: <Calendar size={18} /> },
  ];

  return (
    <footer className="bg-deep-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 mb-16">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link to="/" className="inline-flex items-center mb-6 group">
            <div className="w-40 bg-bg-light rounded-2xl flex items-center justify-center overflow-hidden p-4 shadow-lg">
              <img
                src="/images/logo-stacked.png"
                alt="Zebulon Consulting"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </Link>
          <p className="text-white/60 text-lg italic mb-6">Transform. Empower. Succeed.</p>
          <p className="text-white/40 max-w-xs mb-6">
            Helping organizations build stronger teams and better processes through expert consulting.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-2.5">
          <h4 className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-2">Quick Links</h4>
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white/70 hover:text-white transition-colors w-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {serviceColumns.map((service) => (
          <div key={service.name} className="flex flex-col space-y-2.5">
            <Link
              to={service.href}
              className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-2 hover:text-white transition-colors w-fit"
            >
              {service.name}
            </Link>
            {service.items.map((item) => (
              <span key={item} className="text-white/50 text-sm leading-snug">
                {item}
              </span>
            ))}
          </div>
        ))}

        <div className="flex flex-col space-y-2.5">
          <h4 className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-2">Contact Info</h4>
          <a href="mailto:yohann@zebulon.in" className="text-white/70 hover:text-white transition-colors w-fit">
            yohann@zebulon.in
          </a>
          <p className="text-white/70">Hyderabad, Telangana, India</p>
          <p className="text-white/70">Professional Training and Coaching</p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl w-fit">
            <Star className="text-gold-accent" size={16} fill="currentColor" />
            <span className="text-white/80 font-bold text-sm">4.9 · Google Reviews</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Separator className="bg-white/10 mb-10" />
        <div className="flex flex-row flex-nowrap justify-between items-center gap-3">
          <p className="text-white/40 text-[11px] sm:text-sm whitespace-nowrap">
            © {new Date().getFullYear()} Zebulon Consulting
          </p>
          <div className="flex gap-3 sm:gap-6 text-white/40 text-[11px] sm:text-sm whitespace-nowrap shrink-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              <span className="sm:hidden">Privacy</span>
              <span className="hidden sm:inline">Privacy Policy</span>
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              <span className="sm:hidden">Terms</span>
              <span className="hidden sm:inline">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
