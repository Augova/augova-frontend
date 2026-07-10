import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Augova",
  description: "Get in touch with the Augova team.",
};

const CONNECT_CARDS = [
  {
    icon: "work",
    title: "LinkedIn",
    value: "augova-inc",
    href: "https://www.linkedin.com/in/augova-inc-5b40b9420/",
    align: "justify-start",
  },
  {
    icon: "mail",
    title: "Email",
    value: "augova.ai@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=augova.ai@gmail.com",
    align: "justify-end",
  },
  {
    icon: "photo_camera",
    title: "Instagram",
    value: "@augova_inc",
    href: "https://www.instagram.com/augova_inc",
    align: "justify-start",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="pt-10 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
          <div>
            <div className="mb-12">
              <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Contact Us</div>
              <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Get in touch.</h1>
              <p className="font-body-md text-on-surface-variant">
                Questions about Augova, an existing account, or anything else — send us a message and we&apos;ll get
                back to you.
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
          </div>

          <div className="md:pt-[124px]">
            <div className="font-label-mono text-label-mono text-primary uppercase mb-6">Find Us Online</div>
            <div className="flex flex-col gap-grid-unit">
              {CONNECT_CARDS.map((card) => (
                <div key={card.title} className={`flex ${card.align}`}>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${card.title}: ${card.value} (opens in a new tab)`}
                    className="group w-1/2 border border-border-subtle bg-surface-elevated p-6 flex flex-col hover:border-terminal-green transition-colors focus:outline-none focus:ring-1 focus:ring-terminal-green"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 border border-terminal-green/30 flex items-center justify-center group-hover:border-terminal-green transition-colors">
                        <span className="material-symbols-outlined text-terminal-green text-[22px]">
                          {card.icon}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                        open_in_new
                      </span>
                    </div>
                    <h3 className="font-body-lg font-bold text-primary mb-1">{card.title}</h3>
                    <p className="font-label-mono text-label-mono text-on-surface-variant break-all">
                      {card.value}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
