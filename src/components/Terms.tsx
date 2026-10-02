import Section from "./Section";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Terms() {
  useDocumentMeta(
    "Terms of Service | Zebulon Consulting",
    "Review the terms of service that govern your use of Zebulon Consulting's website and consulting services."
  );

  return (
    <div className="pt-20">
      <Section className="bg-bg-light">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-deep-navy/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using the Zebulon Consulting website, you agree to be bound by these
                Terms of Service. If you do not agree with any part of these terms, please discontinue use
                of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Our Services</h2>
              <p>
                Zebulon Consulting provides professional training, HR solutions, and people advisory
                services. Specific engagement terms, deliverables, and fees for any consulting service are
                agreed separately in writing between Zebulon Consulting and the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and training materials — is
                the property of Zebulon Consulting unless otherwise noted, and may not be reproduced without
                prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Limitation of Liability</h2>
              <p>
                Zebulon Consulting makes reasonable efforts to ensure the information on this site is
                accurate and up to date, but makes no warranties regarding completeness or suitability for
                any particular purpose. Use of this website is at your own discretion and risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Continued use of the website after
                changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Contact Us</h2>
              <p>
                Questions about these Terms can be directed to{" "}
                <a href="tel:+919063673921" className="text-primary-blue font-bold hover:underline">
                  +91 90636 73921
                </a>{" "}
                or through our{" "}
                <a href="/contact" className="text-primary-blue font-bold hover:underline">
                  Contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}
