import Section from "./Section";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function Privacy() {
  useDocumentMeta(
    "Privacy Policy | Zebulon Consulting",
    "Read Zebulon Consulting's privacy policy to understand how we collect, use, and protect your information."
  );

  return (
    <div className="pt-20">
      <Section className="bg-bg-light">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-deep-navy/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Information We Collect</h2>
              <p>
                When you reach out to Zebulon Consulting through our contact form or by phone, we collect
                the details you provide — such as your name, email address, phone number, and the message
                content — so we can respond to your enquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">How We Use Your Information</h2>
              <p>
                We use the information you share with us solely to respond to enquiries, provide the
                consulting, training, HR, and people advisory services you request, and share relevant
                updates about our services. We do not sell or rent your personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Cookies &amp; Analytics</h2>
              <p>
                Our website may use basic analytics tools to understand how visitors use our site, which
                helps us improve content and navigation. These tools do not collect personally identifiable
                information unless you choose to provide it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect the information you
                share with us from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information at any
                time by contacting us using the details on our{" "}
                <a href="/contact" className="text-primary-blue font-bold hover:underline">
                  Contact page
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach us at{" "}
                <a href="tel:+919063673921" className="text-primary-blue font-bold hover:underline">
                  +91 90636 73921
                </a>{" "}
                or visit us in Hyderabad, Telangana, India.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}
