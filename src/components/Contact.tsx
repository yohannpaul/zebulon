import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import { Phone, MapPin, Briefcase, Send } from "lucide-react";
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
            Let's Build a Stronger Business Together
          </h2>
          <p className="text-lg text-deep-navy/70 mb-10 leading-relaxed">
            Whether you want to strengthen employee capability, streamline HR operations, improve your digital presence, or support your service teams, Zebulon Consulting is ready to partner with you.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5 glass-subtle p-5 rounded-2xl">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Call Us</p>
                <p className="text-xl font-bold">9063673921</p>
              </div>
            </div>

            <div className="flex items-center gap-5 glass-subtle p-5 rounded-2xl">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Location</p>
                <p className="text-xl font-bold">Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="flex items-center gap-5 glass-subtle p-5 rounded-2xl">
              <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center shadow-sm text-primary-blue">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm text-deep-navy/50 uppercase font-bold tracking-wider">Industry</p>
                <p className="text-xl font-bold">Professional Training and Coaching</p>
              </div>
            </div>
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
