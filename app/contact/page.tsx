export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="py-section-gap px-margin-desktop max-w-2xl">
        <div className="mb-12">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Contact Us</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Book a demo.</h1>
          <p className="font-body-md text-on-surface-variant">
            Tell us about your business and we&apos;ll show you how Augova can answer, qualify, and book your calls.
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
            required
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
          <input
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            type="text"
            name="industry"
            placeholder="Industry"
          />
          <textarea
            className="bg-surface-elevated border border-border-subtle px-4 py-3 text-on-surface placeholder:text-on-surface-variant"
            name="message"
            placeholder="What should your AI receptionist handle?"
            rows={4}
          />
          <button
            type="submit"
            className="bg-primary text-background px-10 py-4 font-bold text-body-md hover:opacity-80 transition-opacity"
          >
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}
