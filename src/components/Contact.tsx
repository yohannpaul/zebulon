import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Map, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Contact() {
  useDocumentMeta(
    "Contact Us | Zebulon Consulting",
    "Get in touch with Zebulon Consulting for a consultation on training, HR, and people advisory services in Hyderabad."
  );

  return (
    <Section id="contact" className="bg-gray-light pt-40 md:pt-52" backdrop={<GradientBackdrop variant="light" />}>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let's Build a Stronger Team Together
          </h2>
          <p className="text-lg text-deep-navy/70 mb-10 leading-relaxed">
            Whether you're looking to develop your people, strengthen HR practices or address organisational challenges, we're here to understand your needs and help you find the right solutions.
          </p>

          <div className="space-y-5">
            <a href="tel:9063673921" className="flex items-center gap-5 glass-subtle p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Call</p>
                <p className="text-xl font-bold">9063673921</p>
              </div>
            </a>

            <a href="mailto:info@zebulon.in" className="flex items-center gap-5 glass-subtle p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Email</p>
                <p className="text-xl font-bold">info@zebulon.in</p>
              </div>
            </a>

            <div className="flex items-center gap-5 glass-subtle p-5 rounded-2xl">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Location</p>
                <p className="text-xl font-bold">Hyderabad</p>
              </div>
            </div>

            <a href="https://www.linkedin.com/company/zebulon-in/" target="_blank" rel="noreferrer" className="flex items-center gap-5 glass-subtle p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue shrink-0">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">LinkedIn</p>
                <p className="text-xl font-bold">Zebulon Consulting</p>
              </div>
            </a>

            <a href="https://wa.me/9063673921" target="_blank" rel="noreferrer" className="flex items-center gap-5 glass-subtle p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">WhatsApp</p>
                <p className="text-xl font-bold">9063673921</p>
              </div>
            </a>

            <a href="https://maps.app.goo.gl/uLDrdmPFBx8mMv6h8" target="_blank" rel="noreferrer" className="flex items-center gap-5 glass-subtle p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue shrink-0">
                <Map size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Google</p>
                <p className="text-xl font-bold">View on Maps</p>
              </div>
            </a>
          </div>
        </div>

        <Card className="bg-bg-light p-8 md:p-12 rounded-3xl shadow-2xl border border-bg-light">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Full Name</Label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="h-auto w-full px-5 py-4 bg-muted border border-border rounded-xl focus-visible:ring-2 focus-visible:ring-primary-blue/20 focus-visible:border-primary-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Email Address</Label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-auto w-full px-5 py-4 bg-muted border border-border rounded-xl focus-visible:ring-2 focus-visible:ring-primary-blue/20 focus-visible:border-primary-blue transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Phone Number</Label>
                <Input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="h-auto w-full px-5 py-4 bg-muted border border-border rounded-xl focus-visible:ring-2 focus-visible:ring-primary-blue/20 focus-visible:border-primary-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Company Name</Label>
                <Input
                  type="text"
                  placeholder="Your Company"
                  className="h-auto w-full px-5 py-4 bg-muted border border-border rounded-xl focus-visible:ring-2 focus-visible:ring-primary-blue/20 focus-visible:border-primary-blue transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Service Required</Label>
              <Select defaultValue="Learning">
                <SelectTrigger className="h-auto w-full px-5 py-4 bg-muted border border-border rounded-xl focus-visible:ring-2 focus-visible:ring-primary-blue/20 focus-visible:border-primary-blue transition-all">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Learning">Learning</SelectItem>
                  <SelectItem value="HR Solutions">HR Solutions</SelectItem>
                  <SelectItem value="People Advisory">People Advisory</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Message</Label>
              <Textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-5 py-4 bg-muted border border-border rounded-xl focus-visible:ring-2 focus-visible:ring-primary-blue/20 focus-visible:border-primary-blue transition-all resize-none"
              ></Textarea>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-bold">
              Send Message <Send size={20} />
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
