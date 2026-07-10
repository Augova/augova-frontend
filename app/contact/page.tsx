import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Augova",
  description: "Get in touch with the Augova team.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="pt-10 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-2xl">
        <div className="mb-12">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Contact Us</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Get in touch.</h1>
          <p className="font-body-md text-on-surface-variant">
            Questions about Augova, an existing account, or anything else — send us a message and we&apos;ll get back
            to you.
          </p>
        </div>

        <form className="flex flex-col gap-grid-unit">
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="text"
            name="business"
            placeholder="Business name"
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="tel"
            name="phone"
            placeholder="Phone number"
          />
          <textarea
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            name="message"
            placeholder="How can we help?"
            rows={4}
          />
          <button
            type="submit"
            className="bg-primary text-background px-10 py-4 font-bold text-body-md hover:opacity-80 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
