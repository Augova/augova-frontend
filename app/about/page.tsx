import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Augova",
  description: "Why Augova exists, what we build, and where we're taking it.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <ScrollReveal />

      <section className="pt-10 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">About Us</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
            We started Augova because a ringing phone shouldn&apos;t be where good businesses lose money.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We&apos;re a small team building one thing well: an AI receptionist that answers, qualifies, books, and
            hands off — so the business behind it stops paying for calls it never picked up.
          </p>
        </div>
      </section>

      <section className="pb-section-gap px-margin-desktop border-t border-border-subtle pt-16">
        <div className="max-w-3xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Our mission</div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">
            Turn missed calls back into revenue.
          </h2>
          <p className="font-body-md text-on-surface-variant">
            A missed call isn&apos;t a small thing — it&apos;s a customer who called, waited, and left. We built
            Augova to close that gap: more calls answered, more leads captured, more appointments booked, less
            money spent doing it. If a feature doesn&apos;t move one of those numbers, we don&apos;t ship it.
          </p>
        </div>
      </section>

      <section className="pb-section-gap px-margin-desktop border-t border-border-subtle pt-16">
        <div className="max-w-3xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">How we work</div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">
            Your team, not your replacement.
          </h2>
          <p className="font-body-md text-on-surface-variant">
            We treat every call the way we&apos;d want ours handled: confirmed out loud before it&apos;s booked,
            handed to a human the moment it gets uncertain, and never left worse off if something breaks. That&apos;s
            not a compliance checkbox for us — a few of us have run small businesses ourselves, and we know exactly
            what a dropped call costs.
          </p>
        </div>
      </section>

      <section className="pb-section-gap px-margin-desktop border-t border-border-subtle pt-16">
        <div className="max-w-3xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Where we&apos;re headed</div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">
            The phone is the start, not the whole plan.
          </h2>
          <p className="font-body-md text-on-surface-variant">
            We&apos;re starting with voice because it&apos;s the highest-value conversation most SMBs have and the
            easiest one to lose. Once that&apos;s working for you, the same team and the same discipline extend to
            text, follow-up, and the rest of the busywork behind the counter — built only when we can deliver it
            properly, not before.
          </p>
        </div>
      </section>
    </main>
  );
}
