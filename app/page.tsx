import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import ScrollReveal from "@/components/ScrollReveal";

const LANGUAGES = [
  { name: "English", native: "", lang: "en" },
  { name: "Mandarin", native: "普通话", lang: "zh-CN" },
  { name: "Cantonese", native: "廣東話", lang: "zh-HK" },
  { name: "Farsi", native: "فارسی", lang: "fa" },
  { name: "Russian", native: "Русский", lang: "ru" },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-margin-desktop overflow-hidden pt-20">
        <ShaderAnimation />

        {/* Microtext Layer */}
        <div
          className="absolute inset-0 ascii-texture z-0 font-label-mono text-[10px] leading-tight select-none overflow-hidden p-4"
          style={{ color: "rgba(248, 243, 232, 0.72)" }}
        >
          01010101 01010101 01010101 AUGOVA_ENGINE_V2.0 // INITIALIZING_NEURAL_VOICE_LAYER... [OK]
          <br />
          CALL_LOGS: +1 555-0192 (SUCCESS), +1 555-0283 (SUCCESS), +1 555-0374 (SUCCESS)
          <br />
          LATENCY: 12ms // THROUGHPUT: 4.8k CALLS/SEC // VOX_GEN: STABLE
          <br />
          ......................................................................
          <br />
          SYSTEM_STATUS: NOMINAL_OPERATION // REGION: GLOBAL_EDGE_CLUSTER_04
          <br />
          01010101 01010101 01010101 AUGOVA_ENGINE_V2.0 // INITIALIZING_NEURAL_VOICE_LAYER... [OK]
          <br />
        </div>

        <div className="relative z-10 max-w-4xl asymmetric-gutter">
          <span
            className="font-label-mono text-label-mono uppercase tracking-[0.2em] mb-6 block opacity-100"
            style={{ color: "#659287" }}
          >
            Artificial Intelligence // Voice Interface
          </span>
          <h1 className="font-headline-display text-headline-display mb-8 text-reveal" style={{ color: "#fdfbf6" }}>
            Your AI Receptionist That Never Misses a Call
          </h1>
          <p
            className="font-body-lg text-body-lg mb-12 max-w-2xl text-reveal"
            style={{ color: "#659287", animationDelay: "0.1s" }}
          >
            Eliminate missed revenue. Augova handles complex customer intake, appointments, and support queries with
            human-level natural speech, 24/7.
          </p>
          <div className="flex flex-wrap gap-6 text-reveal" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/book-demo"
              className="bg-primary text-background px-10 py-4 font-bold text-body-md border border-primary hover:bg-transparent hover:text-primary transition-all"
            >
              Book a Live Demo
            </Link>
            <Link
              href="/features"
              className="border border-outline px-10 py-4 font-bold text-body-md hover:bg-surface-elevated transition-all flex items-center gap-2"
              style={{ color: "#659287", borderColor: "#659287" }}
            >
              <span className="material-symbols-outlined">play_circle</span>
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Outcome Section */}
      <section id="problem" className="py-section-gap px-margin-desktop bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-5">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">
              Missed Calls Are Missed Revenue
            </h2>
            <div className="font-label-mono text-label-mono text-outline-variant mb-4">SYSTEM_DIAGNOSTIC: 0x442</div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              SMBs lose up to 30% of their annual revenue simply because they can&apos;t get to the phone. Human
              receptionists are expensive and limited by time.
            </p>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center gap-grid-unit">
            <div className="border-l-2 border-border-subtle pl-8 py-6 group hover:border-primary transition-colors">
              <div className="font-label-mono text-label-mono text-terminal-green mb-1">IMPACT_LOSS</div>
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                62% of customers won&apos;t call back.
              </div>
            </div>
            <div className="border-l-2 border-border-subtle pl-8 py-6 group hover:border-primary transition-colors">
              <div className="font-label-mono text-label-mono text-terminal-green mb-1">EFFICIENCY_GAIN</div>
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                100% answer rate, instantly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-gap px-margin-desktop relative" id="how-it-works">
        <div className="mb-12">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">The Logic Gate</div>
          <h2 className="font-headline-lg text-headline-lg text-primary">From Call to Conversion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="relative group">
            <h3 className="font-body-lg font-bold text-primary mb-4">Caller Dials</h3>
            <p className="font-body-md text-on-surface-variant">
              Your existing business number is bridged to Augova&apos;s neural processing layer.
            </p>
          </div>
          <div className="relative group md:mt-24">
            <h3 className="font-body-lg font-bold text-primary mb-4">AI Pick Up</h3>
            <p className="font-body-md text-on-surface-variant">
              The AI answers within 10ms using a voice profile tailored to your brand identity.
            </p>
          </div>
          <div className="relative group">
            <h3 className="font-body-lg font-bold text-primary mb-4">Smart Intake</h3>
            <p className="font-body-md text-on-surface-variant">
              Natural conversation filters the lead, books the slot, or handles the support ticket.
            </p>
          </div>
          <div className="relative group md:mt-24">
            <h3 className="font-body-lg font-bold text-primary mb-4">Data Sync</h3>
            <p className="font-body-md text-on-surface-variant">
              Logs and results are instantly pushed to your CRM or internal dashboard via webhook.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-section-gap px-margin-desktop bg-surface" id="process">
        <div className="mb-12 max-w-2xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Process</div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Launch your AI receptionist without rebuilding your business.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Augova is not just software you turn on and hope for the best. We set up the workflow, connect your
            systems, test real scenarios, and keep improving the receptionist after launch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter">
          <div className="border border-border-subtle p-6 flex flex-col hover:border-terminal-green/60 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 border border-terminal-green/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-terminal-green text-[22px]">search</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant">01</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Call Workflow Audit</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We learn how your calls work today: who calls, why they call, what your team asks, and when humans
              need to step in.
            </p>
          </div>
          <div className="border border-border-subtle p-6 flex flex-col hover:border-terminal-green/60 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 border border-terminal-green/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-terminal-green text-[22px]">menu_book</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant">02</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Knowledge Setup</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We load your FAQs, services, pricing rules, hours, policies, locations, staff instructions, and
              escalation rules.
            </p>
          </div>
          <div className="border border-border-subtle p-6 flex flex-col hover:border-terminal-green/60 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 border border-terminal-green/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-terminal-green text-[22px]">
                  integration_instructions
                </span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant">03</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">System Integration</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We connect the receptionist to your phone setup, calendar, CRM, SMS, email, and other required tools.
            </p>
          </div>
          <div className="border border-border-subtle p-6 flex flex-col hover:border-terminal-green/60 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 border border-terminal-green/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-terminal-green text-[22px]">phonelink_ring</span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant">04</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Test Calls &amp; Staging</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              We run realistic test calls before launch, including bookings, FAQs, urgent calls, confused callers,
              and edge cases.
            </p>
          </div>
          <div className="border border-terminal-green p-6 flex flex-col bg-surface-elevated/40">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 border border-terminal-green flex items-center justify-center bg-terminal-green/10">
                <span className="material-symbols-outlined text-terminal-green text-[22px]">rocket_launch</span>
              </div>
              <span className="font-label-mono text-label-mono text-terminal-green">05</span>
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-3">Go Live &amp; Improve</h3>
            <p className="font-body-md text-on-surface-variant text-sm">
              The AI starts answering real calls. We monitor performance, review outcomes, and refine scripts, rules,
              and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-gap px-margin-desktop bg-surface-elevated" id="features">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">Engineered Performance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-unit">
          <div className="border border-border-subtle p-8 hover:bg-background transition-colors group">
            <span className="material-symbols-outlined text-primary mb-6 text-[32px]">schedule</span>
            <h4 className="font-body-lg font-bold text-primary mb-2">24/7/365 Coverage</h4>
            <p className="font-body-md text-on-surface-variant">
              Your business never sleeps. Holidays, weekends, and late nights are handled.
            </p>
          </div>
          <div className="border border-border-subtle p-8 hover:bg-background transition-colors group">
            <span className="material-symbols-outlined text-primary mb-6 text-[32px]">interpreter_mode</span>
            <h4 className="font-body-lg font-bold text-primary mb-2">Neural Voice Synthesis</h4>
            <p className="font-body-md text-on-surface-variant">
              Ultra-low latency voices that eliminate the &quot;robotic&quot; feel of traditional IVR.
            </p>
          </div>
          <div className="border border-border-subtle p-8 hover:bg-background transition-colors group">
            <span className="material-symbols-outlined text-primary mb-6 text-[32px]">dataset</span>
            <h4 className="font-body-lg font-bold text-primary mb-2">Smart Intake</h4>
            <p className="font-body-md text-on-surface-variant">
              Dynamically asks relevant questions based on customer responses.
            </p>
          </div>
          <div className="border border-border-subtle p-8 hover:bg-background transition-colors group">
            <span className="material-symbols-outlined text-primary mb-6 text-[32px]">sync</span>
            <h4 className="font-body-lg font-bold text-primary mb-2">CRM Integration</h4>
            <p className="font-body-md text-on-surface-variant">
              Direct connections to HubSpot, Salesforce, and 3,000+ apps via Zapier.
            </p>
          </div>
          <div className="border border-border-subtle p-8 hover:bg-background transition-colors group">
            <span className="material-symbols-outlined text-primary mb-6 text-[32px]">analytics</span>
            <h4 className="font-body-lg font-bold text-primary mb-2">Sentiment Analysis</h4>
            <p className="font-body-md text-on-surface-variant">
              Automatically tags urgent or frustrated callers for priority human follow-up.
            </p>
          </div>
          <div className="border border-border-subtle p-8 hover:bg-background transition-colors group">
            <span className="material-symbols-outlined text-primary mb-6 text-[32px]">security</span>
            <h4 className="font-body-lg font-bold text-primary mb-2">Enterprise Security</h4>
            <p className="font-body-md text-on-surface-variant">
              SOC2 compliant data handling and encrypted transmission protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Multilingual Section */}
      <section className="py-section-gap px-margin-desktop bg-[#C9996B] flex flex-col items-center text-center">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-background mb-4">
          Speaks your customers&apos; language
        </h2>
        <p className="font-body-md text-background/80 max-w-3xl mb-8">
          Natural, multilingual conversation means your callers are met in the language they actually think in — not
          routed through a rigid, English-only phone tree. For clinics, firms, and shops serving diverse communities,
          that is the difference between a booked appointment and a hang-up.
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {LANGUAGES.map((language) => (
            <li
              key={language.name}
              className="border border-background/20 px-4 py-2 flex items-baseline gap-3 bg-background/10"
            >
              <span className="font-body-md text-background font-semibold">{language.name}</span>
              {language.native && (
                <span className="font-label-mono text-label-mono text-background/70" lang={language.lang}>
                  {language.native}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="py-section-gap px-margin-desktop" id="use-cases">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span
              className="font-label-mono text-label-mono text-primary uppercase mb-4 inline-block"
              style={{ color: "#659287" }}
            >
              // USE CASES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Tailored for Local Scale</h2>
          </div>
          <div className="font-label-mono text-on-surface-variant text-[10px] uppercase text-right leading-relaxed hidden md:block">
            PROTOCOL_MATCH_01: CLINICAL_HEALTH
            <br />
            PROTOCOL_MATCH_02: CREATIVE_AGENCY
            <br />
            PROTOCOL_MATCH_03: SKILLED_TRADES
            <br />
            PROTOCOL_MATCH_04: LOCAL_RETAIL
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-border-subtle pt-12">
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Clinics</h3>
            <p className="font-body-md text-on-surface-variant">
              Automated appointment scheduling and patient intake without HIPAA violations.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Agencies</h3>
            <p className="font-body-md text-on-surface-variant">
              Filter low-quality leads and book discovery calls while you focus on creative work.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Trades</h3>
            <p className="font-body-md text-on-surface-variant">
              Plumbers, electricians, and contractors answer calls even when they are on a ladder.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Local Biz</h3>
            <p className="font-body-md text-on-surface-variant">
              Handling inventory questions and reservation requests during peak traffic hours.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-section-gap px-margin-desktop bg-surface overflow-hidden">
        <div className="relative">
          <div className="absolute -left-20 top-0 opacity-10 font-headline-display select-none">&quot;</div>
          <blockquote className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="font-headline-lg text-headline-lg italic text-primary mb-12">
              &quot;Augova saved us $4,200 in monthly staffing costs while answering 100% of our after-hours
              calls.&quot;
            </p>
            <cite className="font-label-mono text-label-mono text-on-surface-variant not-italic uppercase tracking-widest">
              — Thomas Wright, Founder of Wright Plumbing
            </cite>
          </blockquote>
        </div>
        <div className="mt-24 flex flex-wrap justify-center items-center gap-16 grayscale opacity-30">
          <div className="font-label-mono text-xl font-bold">LOGISTICS_CO</div>
          <div className="font-label-mono text-xl font-bold">HEALTH_CORE</div>
          <div className="font-label-mono text-xl font-bold">MODERN_LAW</div>
          <div className="font-label-mono text-xl font-bold">SKY_REALTY</div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-gap px-margin-desktop border-t border-border-subtle" id="contact">
        <div className="bg-surface-elevated p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 font-label-mono text-[10px] opacity-20 text-right">
            LAST_DEPLOYMENT: SUCCESS
            <br />
            BUILD: v2024.11.02
            <br />
            LOCATION: ASHBURN_VA
          </div>
          <div className="max-w-3xl">
            <h2 className="font-headline-display text-headline-display text-primary mb-12 leading-[1.1]">
              Ready to stop missing calls?
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/book-demo"
                className="bg-primary text-background px-10 py-6 font-bold text-body-lg hover:opacity-90 transition-opacity"
              >
                Deploy My AI Assistant
              </Link>
              <Link
                href="/contact"
                className="border border-outline px-10 py-6 font-bold text-body-lg text-primary hover:bg-surface transition-all"
              >
                Talk to Sales
              </Link>
            </div>
            <p className="mt-12 font-label-mono text-label-mono text-on-surface-variant">
              No credit card required for the 7-day trial. Integration takes 5 minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
