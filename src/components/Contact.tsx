import Section from "./Section";
import { Phone, MapPin, Briefcase, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-gray-light">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Build a Stronger Business Together
          </h2>
          <p className="text-lg text-deep-navy/70 mb-10 leading-relaxed">
            Whether you want to strengthen employee capability, streamline HR operations, improve your digital presence, or support your service teams, Zebulon Consulting is ready to partner with you.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-blue">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Call Us</p>
                <p className="text-xl font-bold">9063673921</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-blue">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Location</p>
                <p className="text-xl font-bold">Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-blue">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Industry</p>
                <p className="text-xl font-bold">Professional Training and Coaching</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-white">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Service Required</label>
              <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all appearance-none">
                <option>Training & Development</option>
                <option>HR Operations</option>
                <option>Digital Marketing</option>
                <option>Help Desk Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-3"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
