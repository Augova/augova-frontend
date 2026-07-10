const INDUSTRIES = [
  {
    name: "Clinics & Healthcare",
    description:
      "Handles patient intake, triages emergency versus routine calls, and books appointments without adding to front-desk workload.",
  },
  {
    name: "Legal Practices",
    description:
      "Takes new client intake, runs a conflict check against your client list, and routes callers to the right practice area.",
  },
  {
    name: "Real Estate & Property",
    description:
      "Answers property inquiries, schedules showings, and qualifies buyers versus sellers before a call ever reaches an agent.",
  },
  {
    name: "Field Service & Trades",
    description:
      "Triages emergency versus routine service calls, gives a job estimate from the caller's description, and confirms the service area before booking.",
  },
  {
    name: "Hospitality & Reservations",
    description: "Books tables or rooms, captures special requests, and answers common guest questions around the clock.",
  },
  {
    name: "Property Management",
    description:
      "Takes maintenance requests, verifies tenant identity before discussing an account, and triages urgency for dispatch.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32">
      <section className="py-section-gap px-margin-desktop" id="industries">
        <div className="mb-24">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Industries</div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Built for call-heavy businesses.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="border border-border-subtle p-8 hover:bg-surface-elevated transition-colors"
            >
              <h3 className="font-body-lg font-bold text-primary mb-4">{industry.name}</h3>
              <p className="font-body-md text-on-surface-variant">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
