import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | Augova",
  description:
    "Augova is built for call-heavy businesses where a missed call is a missed customer — dental, trades, clinics, legal, and more.",
};

type Industry = {
  icon: string;
  name: string;
  summary: string;
  capabilities: string[];
};

const PRIMARY: Industry[] = [
  {
    icon: "dentistry",
    name: "Dental Practices",
    summary:
      "New-patient calls arrive while your front desk is chairside, and most callers who reach voicemail never leave one. Augova answers every call, books the appointment live, and confirms it out loud before it's locked in.",
    capabilities: ["24/7 answering", "Live booking", "New-patient intake", "Emergency triage", "SMS reminders"],
  },
  {
    icon: "plumbing",
    name: "Home Services & Trades",
    summary:
      "HVAC, plumbing, electrical, roofing. Your hands are on a job, not the phone, and the emergency calls come after hours. Whoever picks up first wins the work.",
    capabilities: [
      "Emergency dispatch triage",
      "Job estimation from description",
      "Service-area validation",
      "Missed-call recovery",
      "Live transfer",
    ],
  },
  {
    icon: "stethoscope",
    name: "Medical & Specialist Clinics",
    summary:
      "Family practice, walk-in, and specialist offices carry a heavy administrative phone load, and a large share of calls arrive outside clinic hours. Augova handles intake, routine questions, and scheduling.",
    capabilities: [
      "Patient intake",
      "Routine vs. urgent triage",
      "FAQ from your knowledge base",
      "Calendar sync",
      "Reminders",
    ],
  },
  {
    icon: "physical_therapy",
    name: "Physiotherapy, Chiro & Wellness",
    summary:
      "The recurring-visit model lives or dies on rebooking and reminders. Augova books the series, reminds the patient, and captures the cancellation early enough to fill the slot.",
    capabilities: [
      "Recurring appointment booking",
      "Multi-resource scheduling",
      "Multi-channel reminders",
      "Callback queue",
      "Missed-call recovery",
    ],
  },
  {
    icon: "spa",
    name: "Beauty, Salons & Med Spas",
    summary:
      "Your staff are hands-busy mid-service, and a large share of bookings are attempted after hours. High-value treatment enquiries are the ones you can least afford to drop.",
    capabilities: [
      "After-hours booking capture",
      "Calendar & CRM sync",
      "SMS follow-up",
      "Structured lead capture",
      "Special request handling",
    ],
  },
];

const LANGUAGES = [
  { name: "English", native: "", lang: "en" },
  { name: "Mandarin", native: "普通话", lang: "zh-CN" },
  { name: "Cantonese", native: "廣東話", lang: "zh-HK" },
  { name: "Farsi", native: "فارسی", lang: "fa" },
  { name: "Russian", native: "Русский", lang: "ru" },
];

const SECONDARY: Industry[] = [
  {
    icon: "gavel",
    name: "Law Firms & Legal Services",
    summary:
      "Prospective clients rarely leave a voicemail, and most retain whoever responds first. One captured intake can outweigh a year of the service.",
    capabilities: ["New-client intake", "Conflict checking", "Case-type qualification", "Hot-lead live transfer"],
  },
  {
    icon: "real_estate_agent",
    name: "Real Estate & Property",
    summary:
      "Property enquiries and showing requests are high-intent and time-sensitive. If nobody answers, the caller moves to the next listing.",
    capabilities: ["Property inquiry handling", "Showing scheduling", "Buyer vs. seller qualification", "Live transfer"],
  },
  {
    icon: "car_repair",
    name: "Auto Repair & Dealerships",
    summary:
      "A caller with a broken-down car dials the next shop instantly. Status-update calls tie up the same line that new work comes in on.",
    capabilities: ["24/7 answering", "Service booking", "Status-call deflection", "Vehicle qualification", "SMS follow-up"],
  },
  {
    icon: "pets",
    name: "Veterinary Clinics",
    summary:
      "Almost all appointments are still booked by phone, and a meaningful share of after-hours calls are genuine emergencies that need routing, not voicemail.",
    capabilities: ["Emergency vs. routine triage", "Live booking", "Refill & FAQ deflection", "Missed-call recovery"],
  },
  {
    icon: "restaurant",
    name: "Restaurants & Hospitality",
    summary:
      "Calls spike exactly when the floor is busiest. Reservations, hours, and menu questions arrive during the same rush that makes them impossible to answer.",
    capabilities: ["Reservation booking", "FAQ resolution", "Special request capture", "SMS confirmations"],
  },
];

function IndustryCard({ industry, featured = false }: { industry: Industry; featured?: boolean }) {
  return (
    <div
      className={`border border-border-subtle p-8 hover:bg-surface-elevated transition-colors group flex flex-col ${
        featured ? "bg-surface-elevated/40" : ""
      }`}
    >
      <span
        className="material-symbols-outlined text-[#DCCFC0] mb-6 text-[32px] group-hover:text-primary transition-colors"
        aria-hidden="true"
      >
        {industry.icon}
      </span>
      <h3 className="font-body-lg font-bold text-primary mb-3">{industry.name}</h3>
      <p className="font-body-md text-on-surface-variant mb-6 flex-1">{industry.summary}</p>
      <ul className="flex flex-wrap gap-2">
        {industry.capabilities.map((capability) => (
          <li
            key={capability}
            className="font-label-mono text-label-mono text-on-surface-variant border border-border-subtle px-3 py-1"
          >
            {capability}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <main className="pt-20">
      <section className="pt-10 pb-section-gap px-margin-mobile md:px-margin-desktop" id="industries">
        <div className="mb-12 max-w-3xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Industries</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
            Built for businesses where a missed call is a missed customer.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Every business below shares the same shape: the phone rings with high-intent customers at exactly the
            moment your team cannot pick it up. Augova answers, qualifies, books, and hands off — in English, Mandarin,
            Cantonese, Farsi, or Russian, whichever your caller is most comfortable speaking.
          </p>
        </div>

        <div className="mb-16">
          <div className="font-label-mono text-label-mono text-[#DCCFC0] uppercase mb-6 border-t border-border-subtle pt-6">
            Where we focus first
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {PRIMARY.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} featured />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="font-label-mono text-label-mono text-[#DCCFC0] uppercase mb-6 border-t border-border-subtle pt-6">
            Also a strong fit
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {SECONDARY.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} />
            ))}
          </div>
        </div>

        <div className="border border-border-subtle p-8 md:p-12 bg-surface-elevated">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">
            Speaks your customers&apos; language
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-3xl mb-8">
            Natural, multilingual conversation means your callers are met in the language they actually think in — not
            routed through a rigid, English-only phone tree. For clinics, firms, and shops serving diverse communities,
            that is the difference between a booked appointment and a hang-up.
          </p>
          <ul className="flex flex-wrap gap-3 mb-10">
            {LANGUAGES.map((language) => (
              <li
                key={language.name}
                className="border border-border-subtle px-4 py-2 flex items-baseline gap-3 bg-background"
              >
                <span className="font-body-md text-primary">{language.name}</span>
                {language.native && (
                  <span className="font-label-mono text-label-mono text-[#DCCFC0]" lang={language.lang}>
                    {language.native}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-primary text-background px-10 py-4 font-bold text-body-md inline-block hover:opacity-80 transition-opacity"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
