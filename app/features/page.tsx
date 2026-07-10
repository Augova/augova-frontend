import Link from "next/link";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function FeaturesPage() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col justify-center px-margin-desktop overflow-hidden pt-24">
        <DottedSurface />
        <div className="absolute inset-0 ascii-overlay z-0 font-label-mono text-[10px] leading-tight select-none overflow-hidden p-6">
          01010101 VOICE_AI_CATALOGUE // PACKAGING_AND_READINESS_LAYER
          <br />
          CORE // STANDARD // ADD_ON // INTERNAL
          <br />
          NOW // NEXT_PHASE // ROADMAP
          <br />
          01010101 01010101 01010101 AUGOVA_ENGINE_V2.0 // FEATURE_MATRIX
          <br />
        </div>

        <div className="relative z-10 max-w-5xl">
          <span className="font-label-mono text-label-mono uppercase tracking-[0.2em] mb-6 block" style={{ color: "#659287" }}>
            Feature Catalogue // Voice AI
          </span>
          <h1 className="font-headline-display text-headline-display text-primary mb-8 leading-tight">
            A structured feature system for every voice AI capability we ship.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-3xl">
            This page distills the voice AI feature classification framework into a buyer-facing overview of what is
            core, what ships today, and what expands later through add-ons and roadmap releases.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/"
              className="bg-primary text-background px-10 py-4 font-bold text-body-md border border-primary hover:bg-transparent hover:text-primary transition-all"
            >
              Back to Home
            </Link>
            <a
              href="#catalog"
              className="border border-outline px-10 py-4 font-bold text-body-md hover:bg-surface-elevated transition-all flex items-center gap-2"
              style={{ color: "#659287", borderColor: "#659287" }}
            >
              <span className="material-symbols-outlined">view_list</span>
              Explore the Catalogue
            </a>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-section-gap px-margin-desktop bg-[#81A6C6]" id="process">
        <div className="mb-12 max-w-2xl">
          <div className="font-label-mono text-label-mono text-black uppercase mb-4">Process</div>
          <h2 className="font-headline-lg text-headline-lg text-black mb-6">
            Launch your AI receptionist without rebuilding your business.
          </h2>
          <p className="font-body-md text-body-md text-black/70">
            Augova is not just software you turn on and hope for the best. We set up the workflow, connect your
            systems, test real scenarios, and keep improving the receptionist after launch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter">
          <div className="border border-black bg-background p-6 flex flex-col hover:bg-surface-elevated transition-colors">
            <div className="w-12 h-12 border border-black bg-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-black text-[22px]">search</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Call Workflow Audit</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We learn how your calls work today: who calls, why they call, what your team asks, and when humans
              need to step in.
            </p>
          </div>
          <div className="border border-black bg-background p-6 flex flex-col hover:bg-surface-elevated transition-colors">
            <div className="w-12 h-12 border border-black bg-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-black text-[22px]">menu_book</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Knowledge Setup</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We load your FAQs, services, pricing rules, hours, policies, locations, staff instructions, and
              escalation rules.
            </p>
          </div>
          <div className="border border-black bg-background p-6 flex flex-col hover:bg-surface-elevated transition-colors">
            <div className="w-12 h-12 border border-black bg-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-black text-[22px]">
                integration_instructions
              </span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">System Integration</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We connect the receptionist to your phone setup, calendar, CRM, SMS, email, and other required tools.
            </p>
          </div>
          <div className="border border-black bg-background p-6 flex flex-col hover:bg-surface-elevated transition-colors">
            <div className="w-12 h-12 border border-black bg-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-black text-[22px]">phonelink_ring</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Test Calls &amp; Staging</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We run realistic test calls before launch, including bookings, FAQs, urgent calls, confused callers,
              and edge cases.
            </p>
          </div>
          <div className="border border-terminal-green bg-background p-6 flex flex-col">
            <div className="w-12 h-12 border border-black bg-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-black text-[22px]">rocket_launch</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Go Live &amp; Improve</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              The AI starts answering real calls. We monitor performance, review outcomes, and refine scripts, rules,
              and workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-desktop bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Packaging Model
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Four ways a feature can be framed.</h2>
            <div className="space-y-4 text-body-md text-on-surface-variant">
              <div>
                <span className="text-primary font-semibold">Core</span> — foundational capabilities that define the
                AI receptionist itself.
              </div>
              <div>
                <span className="text-primary font-semibold">Standard</span> — included in the base package and
                configured per client.
              </div>
              <div>
                <span className="text-primary font-semibold">Add-on</span> — additional scope, integrations, or
                compliance overhead.
              </div>
            </div>
          </div>

          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Readiness Model
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              What is shipping now versus next phase.
            </h2>
            <div className="space-y-4 text-body-md text-on-surface-variant">
              <div>
                <span className="text-primary font-semibold">Now</span> — production-ready for launch in the current
                phase.
              </div>
              <div>
                <span className="text-primary font-semibold">Next Phase</span> — planned, but gated by compliance,
                infrastructure, or maturity.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-section-gap px-margin-desktop">
        <div className="mb-12 max-w-3xl">
          <div className="font-label-mono text-label-mono uppercase mb-4" style={{ color: "#659287" }}>
            Catalogue Snapshot
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Selected categories from the feature framework.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Conversation Engine
            </div>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>• NLU and sub-700ms latency</li>
              <li>• Barge-in and turn-taking</li>
              <li>• Background noise filtering</li>
              <li>• Hallucination guardrails</li>
            </ul>
          </div>

          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Inbound Call Handling
            </div>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>• 24/7 answering</li>
              <li>• FAQ resolution from knowledge bases</li>
              <li>• Missed-call recovery</li>
              <li>• Intelligent voicemail</li>
            </ul>
          </div>

          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Scheduling &amp; Workflow
            </div>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>• Live booking on the call</li>
              <li>• Calendar integration</li>
              <li>• Service-specific time blocks</li>
              <li>• Recurring appointment support</li>
            </ul>
          </div>

          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Knowledge &amp; Personalization
            </div>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>• RAG grounding and document upload</li>
              <li>• Website auto-sync</li>
              <li>• Long-term caller memory</li>
              <li>• Pre-call context lookup</li>
            </ul>
          </div>

          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Compliance &amp; Security
            </div>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>• PIPEDA baseline compliance</li>
              <li>• AI disclosure prompts</li>
              <li>• PII redaction</li>
              <li>• Audit trails and operational logging</li>
            </ul>
          </div>

          <div className="border border-border-subtle bg-surface-elevated/90 p-8">
            <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
              Integrations &amp; CRM
            </div>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>• Native CRM connectors</li>
              <li>• Webhook and API-based workflows</li>
              <li>• Mid-call CRM lookups</li>
              <li>• Ticketing and automation triggers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-desktop bg-surface-elevated">
        <div className="border border-border-subtle bg-surface-elevated/90 p-8 md:p-12">
          <div className="font-label-mono text-label-mono mb-4" style={{ color: "#659287" }}>
            Delivery Summary
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            The catalogue is designed for clarity, not complexity.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Each capability is categorized by packaging and readiness so the team can decide quickly what belongs in
            the product, what is included, and what is still a roadmap item.
          </p>
        </div>
      </section>
    </main>
  );
}
