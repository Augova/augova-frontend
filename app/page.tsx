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
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden pt-20">
        <ShaderAnimation />

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
      <section id="problem" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
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
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative" id="how-it-works">
        <div className="mb-12">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">The Logic Gate</div>
          <h2 className="font-headline-lg text-headline-lg text-primary">From Call to Conversion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="relative group">
            <div className="font-label-mono text-[48px] text-surface-container-highest mb-8 group-hover:text-primary transition-colors">
              01
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Caller Dials</h3>
            <p className="font-body-md text-on-surface-variant">
              Your existing business number is bridged to Augova&apos;s neural processing layer.
            </p>
          </div>
          <div className="relative group md:mt-24">
            <div className="font-label-mono text-[48px] text-surface-container-highest mb-8 group-hover:text-primary transition-colors">
              02
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-4">AI Pick Up</h3>
            <p className="font-body-md text-on-surface-variant">
              The AI answers within 10ms using a voice profile tailored to your brand identity.
            </p>
          </div>
          <div className="relative group">
            <div className="font-label-mono text-[48px] text-surface-container-highest mb-8 group-hover:text-primary transition-colors">
              03
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Smart Intake</h3>
            <p className="font-body-md text-on-surface-variant">
              Natural conversation filters the lead, books the slot, or handles the support ticket.
            </p>
          </div>
          <div className="relative group md:mt-24">
            <div className="font-label-mono text-[48px] text-surface-container-highest mb-8 group-hover:text-primary transition-colors">
              04
            </div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Data Sync</h3>
            <p className="font-body-md text-on-surface-variant">
              Logs and results are instantly pushed to your CRM or internal dashboard via webhook.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-elevated" id="features">
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
              Native CRM sync with mid-call lookups and writes, plus custom webhook and Zapier workflows.
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
            <h4 className="font-body-lg font-bold text-primary mb-2">Secure by Default</h4>
            <p className="font-body-md text-on-surface-variant">
              TLS encryption in transit, PIPEDA-aligned data handling, and audit trails on every call.
            </p>
          </div>
        </div>
      </section>

      {/* Multilingual Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#C9996B] flex flex-col items-center text-center">
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
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop" id="use-cases">
        <div className="max-w-2xl mb-12">
          <span
            className="font-label-mono text-label-mono text-primary uppercase mb-4 inline-block"
            style={{ color: "#659287" }}
          >
            // USE CASES
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Tailored for Local Scale</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-border-subtle pt-12">
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Dental Practices</h3>
            <p className="font-body-md text-on-surface-variant">
              Books new-patient appointments live and confirms them out loud before they&apos;re locked in.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Home Services &amp; Trades</h3>
            <p className="font-body-md text-on-surface-variant">
              Triages emergency calls and books the job while your hands are on the tools, not the phone.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Medical &amp; Specialist Clinics</h3>
            <p className="font-body-md text-on-surface-variant">
              Handles intake and routine questions, and routes anything urgent straight to your team.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-6">Legal Practices</h3>
            <p className="font-body-md text-on-surface-variant">
              Captures new-client intake and case details before the caller tries the next firm.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
