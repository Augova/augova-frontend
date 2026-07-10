import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | Augova",
  description: "See Augova answer, qualify, and book calls for your business.",
};

export default function BookDemoPage() {
  return (
    <main className="pt-20">
      <section className="pt-10 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center mb-16">
          <div className="absolute -left-6 -top-10 opacity-10 font-headline-display select-none" aria-hidden="true">
            &quot;
          </div>
          <p className="relative z-10 font-headline-lg text-headline-lg text-primary mb-4">
            Missed Calls Are Missed Revenue
          </p>
          <p className="relative z-10 font-body-lg text-body-lg text-on-surface-variant">
            Every unanswered call is a customer choosing whether to wait — or call someone else.
          </p>
        </div>
      </section>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
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

          <div className="flex flex-col items-center text-center">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">Book a Demo</h1>
            <p className="font-body-md text-on-surface-variant max-w-md">
              Share a few details about your business and our team will walk you through how Augova answers,
              qualifies, and books your calls.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
