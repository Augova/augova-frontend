import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { Section, SubHeading, List, Callout, Table } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Augova",
  description: "How Augova collects, uses, discloses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="July 10, 2026"
      intro="This policy explains what personal information Augova collects, why we collect it, who we share it with, how long we keep it, and the rights you have over it. It covers both visitors to this website and callers who speak with an Augova AI receptionist deployed by one of our business clients."
    >
      <Callout>
        <strong className="text-primary">Two different roles.</strong> Augova plays two distinct roles, and your rights
        differ depending on which one applies. When you visit this website or contact us as a prospective client, we
        decide why and how your information is handled — we are the organization accountable for it. When you telephone
        a business that uses Augova, that business decides why and how caller information is handled; we process it on
        their instructions, as their service provider. Section 3 explains this in detail.
      </Callout>

      <Section n="01" title="Who we are and how to reach us">
        <p>
          Augova (&quot;Augova&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides an AI voice
          receptionist service to small and mid-sized businesses. Our AI answers inbound telephone calls on behalf of
          those businesses, responds to caller questions from an approved knowledge base, captures caller details,
          books appointments, produces call summaries, and transfers calls to a human when appropriate.
        </p>
        <p>
          We are based in Ontario, Canada, and we are subject to the federal{" "}
          <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA). Where we handle personal
          health information on behalf of an Ontario health information custodian, Ontario&apos;s{" "}
          <em>Personal Health Information Protection Act, 2004</em> (PHIPA) also applies to that information.
        </p>

        <SubHeading>Privacy Officer</SubHeading>
        <p>
          We have designated an individual accountable for our compliance with this policy and with applicable privacy
          law. You may contact our Privacy Officer for any privacy question, to exercise your rights, or to make a
          complaint:
        </p>
        <List
          items={[
            <>
              <strong className="text-primary">Privacy Officer:</strong> [PRIVACY OFFICER NAME]
            </>,
            <>
              <strong className="text-primary">Email:</strong> [PRIVACY@AUGOVA.COM]
            </>,
            <>
              <strong className="text-primary">Mailing address:</strong> [FULL REGISTERED MAILING ADDRESS], Ontario,
              Canada
            </>,
          ]}
        />
        <Callout>
          <strong className="text-primary">Placeholders.</strong> The bracketed fields above, and the legal entity name
          in Section 14, must be completed before this policy is published. PIPEDA requires that a privacy policy
          identify the person accountable for the organization&apos;s privacy practices and give real contact
          information for them.
        </Callout>
      </Section>

      <Section n="02" title="What this policy covers">
        <p>This policy applies to personal information we handle in the following contexts:</p>
        <List
          items={[
            <>
              <strong className="text-primary">This website.</strong> Information you give us through our contact and
              demo-request forms, and limited technical information collected automatically when you browse.
            </>,
            <>
              <strong className="text-primary">Our client relationships.</strong> Information about the owners,
              managers, and staff of the businesses that engage us, collected to negotiate, deliver, support, and bill
              for the service.
            </>,
            <>
              <strong className="text-primary">Calls handled by our AI receptionist.</strong> Information about people
              who telephone a business that uses Augova — including the contents of those calls. We handle this
              information on behalf of, and under the instructions of, that business.
            </>,
          ]}
        />
        <p>
          This policy does not govern how our business clients themselves use caller information once it reaches their
          own systems (for example, their CRM or calendar). Each client is independently responsible for its own
          privacy practices and should publish its own privacy notice.
        </p>
      </Section>

      <Section n="03" title="Our two roles, and why the distinction matters">
        <SubHeading>When we are the accountable organization</SubHeading>
        <p>
          For website visitors, prospective clients, and our own client contacts, Augova determines the purposes for
          which personal information is collected and used. We are accountable for that information under PIPEDA, and
          you may exercise the rights in Section 10 directly against us.
        </p>

        <SubHeading>When we act on a business client&apos;s behalf</SubHeading>
        <p>
          When you telephone a business that uses Augova, that business — not Augova — decides why the call is
          answered, what questions are asked, what is recorded, and how long information is kept, subject to the limits
          in our agreement with them. We collect, use, retain, and delete that information only as that business
          instructs and only for the purpose of delivering the service to them. We do not sell caller information, and
          we do not use the contents of your call to market anything to you.
        </p>
        <p>
          If you are a caller and you wish to access, correct, or delete information about you, you may contact the
          business you called, or you may contact us and we will assist that business in responding. Where we are the
          agent of an Ontario health information custodian (for example, a dental or medical clinic), that custodian
          remains accountable for the personal health information under PHIPA, and we act only as its agent and service
          provider.
        </p>
      </Section>

      <Section n="04" title="Information we collect">
        <SubHeading>Information you provide through this website</SubHeading>
        <List
          items={[
            "Your full name, business name, email address, telephone number, and industry.",
            "Information you volunteer in a free-text message, such as a description of your call-handling problem or what you would like the AI receptionist to do.",
            "Any scheduling preferences you give us for a demonstration.",
          ]}
        />

        <SubHeading>Information collected automatically when you browse</SubHeading>
        <p>
          Our website is a static site. We do not use advertising cookies, cross-site tracking pixels, or third-party
          analytics profiling. Our hosting provider processes standard server request data (such as IP address, browser
          user-agent, and requested page) for the purpose of delivering the site and protecting it against abuse.
        </p>
        <Callout>
          <strong className="text-primary">Before you publish:</strong> if you later add analytics, a chat widget,
          advertising pixels, or cookies of any kind, this section must be rewritten and a cookie notice and consent
          mechanism will likely be required.
        </Callout>

        <SubHeading>Information collected when you call a business that uses Augova</SubHeading>
        <List
          items={[
            <>
              <strong className="text-primary">Call audio.</strong> A recording of the telephone call, where the
              business has enabled recording.
            </>,
            <>
              <strong className="text-primary">Transcripts.</strong> A written, machine-generated transcript of the
              conversation.
            </>,
            <>
              <strong className="text-primary">Telephony metadata.</strong> Your telephone number, the number you
              dialled, the date, time, and duration of the call, and its outcome.
            </>,
            <>
              <strong className="text-primary">Information you say out loud.</strong> Whatever you choose to tell the
              AI receptionist — commonly your name, callback number, the service you are seeking, the urgency of your
              need, an address, and appointment preferences.
            </>,
            <>
              <strong className="text-primary">Call summaries and extracted fields.</strong> A structured summary and
              specific data points derived from the conversation for the business you called.
            </>,
            <>
              <strong className="text-primary">Sensitive information, where you provide it.</strong> Depending on the
              business you called, this may include health information. See Section 8.
            </>,
          ]}
        />
      </Section>

      <Section n="05" title="You will always be told you are speaking with an AI, and that the call may be recorded">
        <p>
          Before any substantive conversation takes place, our AI receptionist discloses, at the beginning of the call
          and in the language of the interaction, that the caller has reached an artificial-intelligence assistant and
          that the call may be recorded. We log proof that this disclosure was delivered on every call.
        </p>
        <p>
          Under PIPEDA, an organization that records a customer telephone call must inform the individual that the call
          is being recorded, explain the purposes of the recording, and give the individual a meaningful alternative if
          they do not consent. Accordingly, if you do not wish to be recorded, you may say so, and depending on the
          policy of the business you called, the call will either continue without an audio recording or you will be
          offered a route to a human being.
        </p>
        <p>
          <strong className="text-primary">Continuing the call after this disclosure indicates your consent</strong> to
          the recording and to the handling of your information as described in this policy and in the privacy notice
          of the business you called.
        </p>
      </Section>

      <Section n="06" title="Why we use personal information">
        <p>
          We collect and use personal information only for purposes a reasonable person would consider appropriate in
          the circumstances, and only for the purposes identified below. We do not sell personal information. We do not
          use the contents of calls to train publicly available third-party AI models.
        </p>
        <Table
          head={["Purpose", "Information used", "Our basis"]}
          rows={[
            [
              "Answering, understanding, and responding to a telephone call",
              "Call audio, transcript, telephony metadata",
              "Consent, obtained through the disclosure in Section 5, on behalf of the business you called",
            ],
            [
              "Booking, rescheduling, or cancelling an appointment",
              "Name, callback number, service requested, scheduling preferences",
              "Necessary to provide the service you requested on the call",
            ],
            [
              "Producing call summaries, transcripts, and structured records for the business",
              "Transcript, extracted fields",
              "Instruction of the business you called, for its ordinary business records",
            ],
            [
              "Transferring your call to a human with context",
              "Transcript so far, caller details",
              "Necessary to provide the service you requested",
            ],
            [
              "Responding to your demo request or enquiry",
              "Contact form submissions",
              "Consent, given when you submit the form",
            ],
            [
              "Service delivery, support, billing, and account administration",
              "Client contact details, usage records",
              "Necessary to perform our contract with the client business",
            ],
            [
              "Safeguarding the service, detecting abuse, and maintaining audit trails",
              "Metadata, audit logs",
              "Our legitimate business interest in security, and our legal obligations",
            ],
            [
              "Meeting legal, regulatory, and record-keeping obligations",
              "As required",
              "Compliance with applicable law",
            ],
          ]}
        />
        <p>
          If we ever wish to use personal information for a purpose not listed above, we will identify that purpose and
          obtain consent before doing so, except where the law permits or requires otherwise.
        </p>
      </Section>

      <Section n="07" title="Voice cloning and voice biometrics">
        <p>
          Some clients ask us to reproduce a specific person&apos;s voice — typically the business owner&apos;s — so
          that callers hear a familiar voice after hours. A person&apos;s voiceprint is sensitive personal information.
        </p>
        <List
          items={[
            "We create a cloned voice only where the individual whose voice is being cloned has given prior, express, written consent, on a form that identifies the purpose and the retention period.",
            "We do not clone the voice of any person who has not personally consented, and we do not clone the voice of a public figure or any identifiable third party.",
            "Voice models are used solely to render speech for the client that commissioned them. They are not shared, sold, licensed, or reused for any other client or purpose.",
            "The individual may withdraw consent at any time, and we will delete the voice model and cease using it within thirty (30) days of the request.",
            "Where a client enables voice identification or PIN verification, any voiceprint used for authentication is handled as sensitive biometric information, stored in encrypted form, and never used for any purpose other than verifying the caller's identity for that client.",
          ]}
        />
      </Section>

      <Section n="08" title="Health information and other sensitive information">
        <p>
          Several of our clients are dental clinics, medical practices, and other regulated health providers. Under
          PHIPA, those clients are health information custodians and remain accountable for the personal health
          information in their custody, including when an agent handles it for them.
        </p>
        <p>When we act as the agent of a health information custodian:</p>
        <List
          items={[
            "We collect, use, and disclose personal health information only as permitted by the custodian and only as necessary to deliver the service — never for our own purposes.",
            "We do not disclose personal health information to any person other than the custodian, except as the custodian directs or as the law requires.",
            "Transcripts are automatically screened for health information and, where detected, are placed under stricter retention and access controls.",
            "Health details are excluded from any long-term caller-memory feature.",
            "Processing for clinic clients is confined to Canadian regions, and we will enter into a written agreement with the custodian setting out our safeguards.",
            "If personal health information in our care is lost, stolen, or accessed without authority, we notify the custodian at the first reasonable opportunity.",
          ]}
        />
        <Callout>
          <strong className="text-primary">We do not currently hold HIPAA certification</strong> and we do not sign U.S.
          Business Associate Agreements. Our health-data posture is PHIPA- and PIPEDA-oriented and confined to Canada.
        </Callout>
      </Section>

      <Section n="09" title="Who we share information with">
        <p>
          We disclose personal information only as described here. We do not sell personal information, and we do not
          disclose it for any third party&apos;s independent marketing purposes.
        </p>

        <SubHeading>The business you called</SubHeading>
        <p>
          Caller information is delivered to the business whose telephone line you dialled. That is the entire purpose
          of the service. Once it is in that business&apos;s systems, its own privacy policy governs.
        </p>

        <SubHeading>Service providers who process information for us</SubHeading>
        <p>
          We engage a small number of vendors to operate the service. Each is bound by contract to protect personal
          information, to use it only for the purposes we specify, and to provide a comparable level of protection to
          that required by PIPEDA.
        </p>
        <Table
          head={["Category", "What they do", "Processing location"]}
          rows={[
            ["Telephony carrier", "Connects calls, provisions numbers, delivers SMS, captures call audio", "Canada / United States"],
            ["Speech-to-text providers", "Convert call audio into text in real time", "Canada and United States"],
            ["Text-to-speech providers", "Generate the AI receptionist's spoken voice", "Canada and United States"],
            ["Large language model providers", "Understand caller intent and generate responses", "United States"],
            ["Cloud hosting and object storage", "Run our services; store recordings, transcripts, and backups", "Canada"],
            ["Transactional email provider", "Deliver summaries, confirmations, and notifications", "Canada / United States"],
            ["Payment processor", "Process client subscription and setup payments", "United States"],
          ]}
        />

        <SubHeading>Legal and protective disclosures</SubHeading>
        <p>
          We may disclose personal information where required or permitted by law — for example, in response to a
          subpoena, warrant, court order, or other lawful demand; to investigate a suspected breach of our agreements;
          to protect against fraud; or to protect the rights, safety, or property of any person.
        </p>

        <SubHeading>Business transactions</SubHeading>
        <p>
          If Augova is involved in a merger, acquisition, financing, or sale of assets, personal information may be
          disclosed to the parties involved, subject to confidentiality obligations and to the limits PIPEDA places on
          such disclosures. We will give notice before personal information becomes subject to a different privacy
          policy.
        </p>
      </Section>

      <Section n="10" title="Storage location and transfers outside Canada">
        <p>
          Our databases, call recordings, transcripts, and backups are stored in Canada. However, some of the vendors
          listed in Section 9 — in particular certain speech-recognition, voice-synthesis, and large language model
          providers — process information on servers located in the United States.
        </p>
        <Callout>
          <strong className="text-primary">What this means for you.</strong> While personal information is in the
          custody of a service provider in a foreign country, it is subject to the laws of that country, and may be
          accessible to that country&apos;s courts, law enforcement, and national security authorities. We use
          Canadian-region processing wherever a credible option exists, and we require Canadian-region processing for
          clients who are health information custodians.
        </Callout>
        <p>
          Augova remains accountable for personal information transferred to a service provider for processing, and we
          use contractual means to provide a comparable level of protection while the information is being processed on
          our behalf.
        </p>
      </Section>

      <Section n="11" title="How long we keep information">
        <p>
          We keep personal information only as long as necessary to fulfil the purposes for which it was collected, or
          as required by law. Default periods are set out below; a business client may configure a shorter period, and
          in some cases a longer one where the law requires it.
        </p>
        <Table
          head={["Category", "Default retention", "Why"]}
          rows={[
            ["Call audio recordings", "90 days", "Quality assurance, dispute resolution, and verification of what was said"],
            ["Redacted call transcripts and summaries", "24 months", "The client's ordinary business record of the call"],
            ["Audit logs", "7 years", "Tamper-evident record of consent, disclosure, and access, for accountability"],
            ["Website contact form submissions", "24 months from last contact", "To respond to and follow up on your enquiry"],
            ["Client account and billing records", "7 years after the relationship ends", "Tax, accounting, and limitation-period requirements"],
            ["Voice models created by cloning", "For the term of the client agreement, or until consent is withdrawn", "To render the client's chosen voice"],
          ]}
        />
        <p>
          When a retention period expires, we securely destroy, erase, or de-identify the information. Where information
          has been de-identified for aggregate analytics, it no longer identifies any individual and may be retained.
        </p>
      </Section>

      <Section n="12" title="Your rights, and how to exercise them">
        <p>Subject to the limited exceptions in PIPEDA, you have the right to:</p>
        <List
          items={[
            <>
              <strong className="text-primary">Know</strong> whether we hold personal information about you, and to be
              told how it has been used and to whom it has been disclosed.
            </>,
            <>
              <strong className="text-primary">Access</strong> that information and receive a copy of it.
            </>,
            <>
              <strong className="text-primary">Correct</strong> information that is inaccurate or incomplete.
            </>,
            <>
              <strong className="text-primary">Withdraw consent</strong> at any time, subject to legal or contractual
              restrictions and reasonable notice. We will tell you the consequences of withdrawing consent before you
              do.
            </>,
            <>
              <strong className="text-primary">Request deletion</strong> of information we no longer have a lawful
              reason to keep.
            </>,
            <>
              <strong className="text-primary">Complain</strong> about our handling of your information, to us and to
              the Office of the Privacy Commissioner of Canada.
            </>,
          ]}
        />
        <p>
          To exercise any of these rights, contact our Privacy Officer using the details in Section 1. We will ask you
          for enough information to confirm your identity and to locate the records in question. We respond to access
          requests within thirty (30) days, and will tell you in advance if we need an extension permitted by law. We do
          not charge a fee for a routine access request; if a request would involve significant cost, we will give you
          an estimate first and proceed only if you agree.
        </p>
        <p>
          If we refuse a request in whole or in part, we will explain why in writing, tell you which provision of the
          law we rely on, and inform you of your right to complain.
        </p>

        <SubHeading>If you are a caller</SubHeading>
        <p>
          Because the business you telephoned decides how caller information is handled, the most direct route is to
          contact that business. If you contact us instead, we will identify the relevant business, notify them of your
          request, and assist in fulfilling it. We can delete or redact records held in our systems on that
          business&apos;s instruction, but we cannot delete copies the business has already exported into its own CRM,
          calendar, or email — only the business can do that.
        </p>

        <SubHeading>Escalating a complaint</SubHeading>
        <p>
          If you are not satisfied with our response, you may complain to the Office of the Privacy Commissioner of
          Canada (priv.gc.ca). Where personal health information is involved, you may complain to the Information and
          Privacy Commissioner of Ontario (ipc.on.ca).
        </p>
      </Section>

      <Section n="13" title="How we protect information">
        <p>
          We maintain administrative, technical, and physical safeguards appropriate to the sensitivity of the
          information, including:
        </p>
        <List
          items={[
            "Encryption of data in transit (TLS 1.3) and encryption of data at rest, with application-level encryption for access tokens and identifier maps.",
            "Automated detection and masking of personally identifying information in transcripts and logs, with access to unmasked data restricted by role and logged.",
            "An append-only, tamper-evident audit log recording consent moments, disclosure delivery, access to unredacted information, and configuration changes.",
            "Least-privilege access controls, individual named accounts, and hardware-backed two-factor authentication for all staff. No shared credentials.",
            "Encrypted nightly backups held in Canadian storage, with periodic restore testing.",
            "A written incident-response procedure.",
          ]}
        />
        <p>
          No safeguard is perfect, and no method of transmission or storage is completely secure. We cannot guarantee
          absolute security, but we do commit to the practices above and to improving them as the service grows.
        </p>

        <SubHeading>Breach notification</SubHeading>
        <p>
          If a breach of security safeguards creates a real risk of significant harm to an individual, we will report it
          to the Office of the Privacy Commissioner of Canada and notify affected individuals as soon as feasible, and
          we will maintain a record of every breach as PIPEDA requires. Where the information is personal health
          information held on behalf of a custodian, we will notify that custodian at the first reasonable opportunity.
        </p>
      </Section>

      <Section n="14" title="Children">
        <p>
          Our website and our service are directed to businesses, not to children. We do not knowingly collect personal
          information from a child through this website. A child may, of course, telephone a business that uses our AI
          receptionist; in that case the information is handled on that business&apos;s behalf under this policy and
          under the business&apos;s own obligations. If you believe a child&apos;s information has been collected in a
          manner inconsistent with applicable law, contact our Privacy Officer and we will address it.
        </p>
      </Section>

      <Section n="15" title="Automated processing and its limits">
        <p>
          Our service uses artificial intelligence to understand speech and generate responses. The AI is constrained to
          answer from a knowledge base approved by the business you called, and it is instructed to hand the call to a
          human rather than guess when a question falls outside that knowledge base. It does not make decisions that
          produce legal effects concerning you or similarly significantly affect you; it books, records, routes, and
          answers questions.
        </p>
        <p>
          AI systems can make mistakes, including mis-hearing a word or mis-transcribing a name. If you believe a record
          about you is inaccurate, you may exercise your right of correction under Section 12.
        </p>
      </Section>

      <Section n="16" title="Changes to this policy">
        <p>
          We may update this policy from time to time. The &quot;last updated&quot; date at the top of the page shows
          when it was last revised. If we make a material change to how we handle personal information, we will take
          reasonable steps to notify affected individuals and, where the law requires it, obtain fresh consent. Your
          continued use of the website or the service after a change takes effect constitutes acceptance of the revised
          policy, except where consent is legally required.
        </p>
      </Section>

      <Section n="17" title="Contact us">
        <p>
          Questions, access requests, corrections, and complaints should be directed to our Privacy Officer at the
          address in Section 1. We take every privacy complaint seriously and will investigate all complaints we
          receive.
        </p>
        <p>
          For the commercial terms that govern use of our service, see our{" "}
          <Link href="/terms" className="text-terminal-green hover:text-primary underline transition-colors">
            Terms of Service
          </Link>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
