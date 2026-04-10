import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-deep-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-lg">
              <img 
                src="src/logo.png" 
                alt="ZC Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-deep-navy font-bold text-2xl">ZC</span>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif text-white tracking-tight leading-none">
                ZEBULON
              </span>
              <span className="text-[10px] font-bold text-gold-accent tracking-[0.2em] uppercase">
                CONSULTING
              </span>
            </div>
          </Link>
          <p className="text-white/60 text-lg italic mb-6">Transform. Empower. Succeed.</p>
          <p className="text-white/40 max-w-xs">
            Helping organizations build stronger teams and better processes through expert consulting.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-2">Quick Links</h4>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white/70 hover:text-white transition-colors w-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-2">Contact Info</h4>
          <p className="text-white/70">Phone: 9063673921</p>
          <p className="text-white/70">Hyderabad, Telangana, India</p>
          <p className="text-white/70">Professional Training and Coaching</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Zebulon Consulting. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-white/40 text-sm">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
