import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { staggerContainer, fadeInUp } from "../lib/motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Learning", href: "/learning" },
    { name: "HR Solutions", href: "/hr-solutions" },
    { name: "People Advisory", href: "/people-advisory" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-deep-navy/5 py-4" : "py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/logo-horizontal.png"
            alt="Zebulon Consulting"
            className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>

        {/* Desktop Nav (6 links + CTA needs the full lg breakpoint to avoid
            colliding/wrapping in the 768–1024px tablet range — the mobile
            menu below covers that range instead) */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <nav className="flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative group font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.href
                    ? "text-primary-blue"
                    : "text-deep-navy hover:text-primary-blue"
                }`}
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">{link.name}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-primary-blue to-gold-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            ))}
          </nav>
          <Button asChild className="h-11 px-6 rounded-xl font-bold">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle (covers everything below lg, including tablet widths) */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden text-deep-navy" aria-label="Open menu">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="glass-dark border-white/10 w-[300px] sm:w-[380px] p-0">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link to="/" className="inline-flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="bg-bg-light rounded-xl px-3 py-2.5 shadow-sm">
                  <img
                    src="/images/logo-horizontal.png"
                    alt="Zebulon Consulting"
                    className="h-9 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </Link>
            </SheetHeader>

            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 px-6 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.div key={link.name} custom={index} variants={fadeInUp}>
                  <SheetClose asChild>
                    <Link
                      to={link.href}
                      className={`block text-2xl font-bold py-2 transition-colors ${
                        location.pathname === link.href ? "text-gold-accent" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}
            </motion.nav>

            <SheetFooter>
              <Button variant="accent" asChild className="w-full h-12 rounded-xl font-bold">
                <SheetClose asChild>
                  <Link to="/contact">Book a Call</Link>
                </SheetClose>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
