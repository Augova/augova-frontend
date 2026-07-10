import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { Section, SubHeading, List, Callout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Augova",
  description: "The terms governing use of the Augova website and AI voice receptionist service.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="July 10, 2026"
      intro="These Terms govern your use of the Augova website and, where you have entered into an Order Form with us, your use of the Augova AI voice receptionist service. Please read them carefully — they allocate risk between us, limit our liability, and place important obligations on you."
    >
      <Callout>
        <strong className="text-primary">Read Sections 8, 12, 13, and 14 closely.</strong> They contain a disclaimer of
        warranties, a limitation of our liability, an indemnity you give to us, and the obligations you take on for
        caller consent and the accuracy of the information the AI relies on. They materially affect your legal rights.
      </Callout>

      <Section n="01" title="Who these Terms are between">
        <p>
          These Terms of Service (the &quot;<strong className="text-primary">Terms</strong>&quot;) form a binding
          agreement between Augova (&quot;<strong className="text-primary">Augova</strong>&quot;, &quot;we&quot;,
          &quot;us&quot;) and the person or entity that accesses our website or uses our services (&quot;
          <strong className="text-primary">you</strong>&quot; or the &quot;
          <strong className="text-primary">Client</strong>&quot;).
        </p>
        <Callout>
          <strong className="text-primary">Placeholder.</strong> Augova is not yet incorporated. Before these Terms are
          published, replace &quot;Augova&quot; above with the full legal name of the contracting entity (for example,
          &quot;[LEGAL ENTITY NAME], a corporation incorporated under the laws of Ontario&quot;), and insert the
          registered address. Until an entity exists, the individual operating the business may be personally liable
          under these Terms — this is a matter to raise with your lawyer and accountant before launch.
        </Callout>
        <p>
          By accessing the website, submitting a form, or using the Service, you accept these Terms. If you do not
          accept them, do not use the website or the Service. If you are accepting on behalf of a business, you
          represent that you have authority to bind that business.
        </p>
      </Section>

      <Section n="02" title="Definitions">
        <List
          items={[
            <>
              <strong className="text-primary">Service</strong> — the Augova AI voice receptionist, including the
              telephony integration, conversational AI, appointment booking, transcription, call summaries, human
              handoff, integrations, and any add-ons identified in an Order Form.
            </>,
            <>
              <strong className="text-primary">Order Form</strong> — the written statement of work, quotation, or
              order document signed or accepted by the Client that identifies the scope, fees, setup, add-ons, and
              term. Each Order Form incorporates these Terms.
            </>,
            <>
              <strong className="text-primary">Caller</strong> — any individual who telephones a number handled by the
              Service.
            </>,
            <>
              <strong className="text-primary">Client Data</strong> — all information the Client provides or that the
              Service collects on the Client&apos;s behalf, including knowledge-base content, call recordings,
              transcripts, summaries, and Caller details.
            </>,
            <>
              <strong className="text-primary">Knowledge Base</strong> — the FAQs, service descriptions, hours,
              policies, pricing rules, staff instructions, escalation rules, and documents the Client approves for the
              AI to rely on.
            </>,
          ]}
        />
      </Section>

      <Section n="03" title="The Service, and what it is not">
        <p>
          The Service answers inbound telephone calls on the Client&apos;s behalf, responds to Caller questions using
          the Knowledge Base, captures Caller details, books appointments in the Client&apos;s connected calendar,
          produces transcripts and summaries, and transfers calls to a human where the Client&apos;s rules require it.
        </p>
        <SubHeading>The Service is not professional advice</SubHeading>
        <p>
          The AI does not provide medical, dental, legal, financial, or other professional advice, and it must not be
          configured to do so. It answers only from the Knowledge Base the Client approves, and it is designed to hand
          off to a human when a question falls outside that scope. The Client is solely responsible for the
          professional services it provides to its own customers and patients. Nothing the AI says on a call creates a
          professional relationship between Augova and any Caller.
        </p>
        <SubHeading>The Service is not an emergency service</SubHeading>
        <p>
          The Service must not be used as, or represented to Callers as, a substitute for emergency services. It cannot
          dispatch police, fire, or ambulance. The Client must maintain an appropriate route for genuine emergencies
          and must configure emergency-triage rules accordingly.
        </p>
        <SubHeading>Managed service, not self-serve software</SubHeading>
        <p>
          The Service is delivered as a managed engagement. Augova performs the workflow review, Knowledge Base setup,
          integration, pre-launch testing, and ongoing tuning described in the Order Form.
        </p>
      </Section>

      <Section n="04" title="What we require of you">
        <p>The Client shall:</p>
        <List
          items={[
            "Provide accurate, complete, and current Knowledge Base content, and keep it updated. The AI's answers are only as accurate as the information the Client approves.",
            "Hold all rights necessary to give us the Client Data and Knowledge Base content, and to permit us to process it.",
            "Maintain the telephony arrangements, calendars, CRM, and other systems required for the integrations it has ordered, and grant and maintain the access credentials needed.",
            "Comply with all laws applicable to its own business, including its professional and regulatory obligations.",
            "Designate a person authorized to approve the Knowledge Base, escalation rules, and recording settings.",
            "Review call summaries and transcripts and promptly notify Augova of any material error in the AI's behaviour.",
            "Keep credentials confidential and notify us immediately of any suspected unauthorized access.",
          ]}
        />
      </Section>

      <Section n="05" title="Caller notice, consent, and recording — your obligations">
        <p>
          This section is central to the lawful operation of the Service, and the obligations in it rest with the
          Client.
        </p>
        <List
          items={[
            <>
              <strong className="text-primary">AI disclosure.</strong> The Service discloses to every Caller, at the
              start of the call, that they are speaking with an artificial-intelligence assistant. The Client shall not
              request, and Augova will not implement, any configuration that suppresses, delays, or obscures this
              disclosure, or that represents the AI as a human being.
            </>,
            <>
              <strong className="text-primary">Recording notice.</strong> Where the Client enables call recording, the
              Service announces that the call may be recorded. The Client is responsible for determining that recording
              is lawful for its business and jurisdiction, for selecting the purpose of the recording, and for offering
              Callers who object a meaningful alternative.
            </>,
            <>
              <strong className="text-primary">The Client is the accountable organization for Caller data.</strong>{" "}
              As between the parties, the Client determines the purposes for which Caller personal information is
              collected, used, and disclosed. Augova processes it as the Client&apos;s service provider, on the
              Client&apos;s documented instructions, and for no other purpose.
            </>,
            <>
              <strong className="text-primary">The Client must publish its own privacy notice</strong> describing how
              it handles Caller information, and must respond to Callers who exercise their privacy rights. Augova will
              assist the Client in responding to such requests.
            </>,
            <>
              <strong className="text-primary">Health information.</strong> Where the Client is a health information
              custodian under PHIPA, Augova acts as its agent and service provider. The parties shall enter into a
              written agreement setting out Augova&apos;s permitted uses and safeguards before any personal health
              information is processed.
            </>,
            <>
              <strong className="text-primary">Voice cloning.</strong> Where the Client orders a cloned voice, the
              Client shall obtain and provide to Augova the prior express written consent of the individual whose voice
              is cloned. The Client shall not request the cloning of any voice it does not have the right to use.
            </>,
          ]}
        />
      </Section>

      <Section n="06" title="Acceptable use">
        <p>The Client shall not, and shall not permit any person to:</p>
        <List
          items={[
            "Use the Service to make outbound telemarketing calls, or any calls that would violate the Telecommunications Act, CRTC rules, CASL, or the equivalent laws of any applicable jurisdiction. Outbound calling is not part of the Service unless expressly ordered and enabled in writing.",
            "Configure the AI to impersonate a human, to deny that it is an AI, or to impersonate any identifiable individual without that person's written consent.",
            "Use the Service to harass, defraud, deceive, or unlawfully discriminate against any person.",
            "Use the Service to solicit, record, or store payment card data, unless and until Augova has expressly enabled a PCI-compliant payment capability in writing.",
            "Configure the AI to provide medical, legal, or financial advice, or to make clinical determinations.",
            "Attempt to reverse engineer, decompile, scrape, or derive the source code, models, prompts, or architecture of the Service; or use the Service to build a competing product.",
            "Resell, sublicense, or provide the Service to a third party except as expressly permitted in an Order Form.",
            "Circumvent usage limits, security controls, or the fair-use provisions of the Order Form.",
            "Introduce malicious code, or attempt to gain unauthorized access to Augova's systems or another client's data.",
          ]}
        />
        <p>
          Augova may suspend the Service immediately, without liability, where it reasonably believes continued
          operation would violate law, expose Augova or a third party to material risk, or where the Client&apos;s use
          threatens the security or integrity of the platform. We will restore the Service promptly once the cause is
          resolved.
        </p>
      </Section>

      <Section n="07" title="Fees, setup, and the proof window">
        <p>
          Fees, the setup charge, the payment schedule, any fair-use minute allowance, add-ons, and the length of the
          proof window are set out in the applicable Order Form. Those commercial terms govern; this section describes
          only the framework.
        </p>
        <List
          items={[
            "A portion of the setup fee is payable as a deposit on signing, as stated in the Order Form. Setup fees are earned on delivery of the setup work and are non-refundable once that work has been performed, except where Augova fails to deliver.",
            "Where the Order Form provides a proof window, the recurring fee begins only after that window ends. The proof window defers the recurring fee; it does not discount it.",
            "Recurring fees are billed in advance for each billing period and are non-refundable except as expressly stated in these Terms or the Order Form.",
            "All fees are exclusive of applicable taxes, which the Client shall pay.",
            "Late amounts may bear interest at 1.5% per month (19.56% per annum), calculated from the due date until paid, and Augova may suspend the Service on reasonable notice for non-payment.",
            "Where the Order Form contains a fair-use allowance and the Client exceeds it, the parties will discuss moving the Client to the appropriate tier or adding capacity, as provided in the Order Form. Augova will not retroactively convert a flat-fee engagement to usage billing without the Client's written agreement.",
            "Augova may change fees on renewal by giving at least thirty (30) days' written notice before the end of the then-current term.",
          ]}
        />
      </Section>

      <Section n="08" title="Service levels, availability, and failover">
        <p>
          Augova will use commercially reasonable efforts to keep the Service available. The Service depends on
          third-party carriers, cloud providers, and AI vendors, and on the Client&apos;s own telephone and network
          arrangements, none of which Augova controls.
        </p>
        <Callout>
          <strong className="text-primary">Failover.</strong> If the Service cannot answer a call, calls are designed
          to fail over to the Client&apos;s existing telephone line or voicemail, leaving the Client no worse off than
          before the Service was engaged. The Client shall maintain that fallback arrangement at all times.
        </Callout>
        <p>
          Unless a separate service-level agreement is executed, Augova provides no uptime guarantee and no service
          credits. Augova may perform maintenance, and will use reasonable efforts to schedule planned maintenance
          outside the Client&apos;s peak call hours.
        </p>
      </Section>

      <Section n="09" title="Artificial intelligence: capabilities and limits">
        <p>
          The Client acknowledges that the Service uses probabilistic, machine-learning systems, and that such systems:
        </p>
        <List
          items={[
            "may mis-hear, mis-transcribe, or misunderstand speech, particularly in noisy conditions or with unfamiliar accents, names, or terminology;",
            "may, despite guardrails, produce an incorrect or incomplete answer;",
            "are constrained to answer from the Knowledge Base, and will decline or hand off rather than answer outside it, but this constraint cannot be guaranteed to be perfect;",
            "read appointment details back to the Caller for confirmation before booking, which materially reduces but does not eliminate the risk of a booking error.",
          ]}
        />
        <p>
          The Client is responsible for reviewing call outcomes and for maintaining human oversight proportionate to
          the consequences of an error in its business. Augova does not warrant that the AI will be free of errors, and
          the Client shall not rely on the Service as the sole safeguard in any workflow where an error would cause
          serious harm.
        </p>
      </Section>

      <Section n="10" title="Intellectual property">
        <SubHeading>Augova&apos;s property</SubHeading>
        <p>
          Augova owns and retains all right, title, and interest in the Service, including its software, models,
          prompts, conversation designs, tooling, documentation, and all improvements to them. These Terms grant the
          Client a limited, non-exclusive, non-transferable, revocable right to use the Service during the term, solely
          for its internal business purposes.
        </p>
        <SubHeading>The Client&apos;s property</SubHeading>
        <p>
          The Client owns and retains all right, title, and interest in the Client Data and Knowledge Base content. The
          Client grants Augova a non-exclusive licence to host, process, transmit, and display that content solely as
          necessary to deliver, support, secure, and improve the Service for that Client, and as otherwise permitted by
          our{" "}
          <Link href="/policy" className="text-terminal-green hover:text-primary underline transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
        <SubHeading>Aggregated and de-identified data</SubHeading>
        <p>
          Augova may generate aggregated, de-identified statistics from use of the Service — for example, average call
          duration or containment rate — and may use them to operate, benchmark, and improve the Service. Such data
          shall never identify the Client, any Caller, or any individual, and Augova shall not disclose it in a manner
          that permits re-identification.
        </p>
        <SubHeading>Feedback</SubHeading>
        <p>
          If the Client gives Augova suggestions or feedback, Augova may use them without restriction or obligation.
        </p>
      </Section>

      <Section n="11" title="Confidentiality">
        <p>
          Each party may receive non-public information of the other. The receiving party shall protect it with at
          least the care it uses for its own confidential information (and no less than reasonable care), use it only
          to perform under these Terms, and disclose it only to personnel and contractors who need it and are bound by
          confidentiality obligations.
        </p>
        <p>
          These obligations do not apply to information that is or becomes public through no fault of the receiving
          party, was rightfully known without restriction before disclosure, is rightfully received from a third party,
          or is independently developed. A party may disclose confidential information where compelled by law, provided
          it gives prompt notice (where lawful) and reasonable cooperation to seek protective treatment.
        </p>
      </Section>

      <Section n="12" title="Disclaimer of warranties">
        <p className="uppercase font-label-mono text-label-mono text-on-surface-variant leading-relaxed">
          Except as expressly stated in these Terms or an Order Form, the Service is provided &quot;as is&quot; and
          &quot;as available&quot;. To the fullest extent permitted by law, Augova disclaims all other warranties,
          conditions, and representations, whether express, implied, statutory, or otherwise, including any implied
          warranty or condition of merchantability, merchantable quality, fitness for a particular purpose, durability,
          title, and non-infringement. Augova does not warrant that the Service will be uninterrupted, error-free, or
          secure, that it will meet the Client&apos;s requirements, or that the AI&apos;s output will be accurate or
          complete in every instance.
        </p>
        <p>
          Some jurisdictions do not permit the exclusion of certain warranties, and consumer-protection legislation may
          confer rights that cannot be waived. Nothing in these Terms excludes or limits any right that cannot lawfully
          be excluded or limited.
        </p>
      </Section>

      <Section n="13" title="Limitation of liability">
        <p className="uppercase font-label-mono text-label-mono text-on-surface-variant leading-relaxed">
          To the fullest extent permitted by law, neither party shall be liable for any indirect, incidental, special,
          consequential, exemplary, or punitive damages, or for any loss of profits, revenue, business, goodwill,
          anticipated savings, or data, however caused and on any theory of liability, whether in contract, tort
          (including negligence), strict liability, or otherwise, even if advised of the possibility of such damages.
        </p>
        <p className="uppercase font-label-mono text-label-mono text-on-surface-variant leading-relaxed">
          Augova&apos;s aggregate liability arising out of or related to these Terms and the Service, from all causes
          of action and under all theories of liability, shall not exceed the total fees paid by the Client to Augova
          under the applicable Order Form in the twelve (12) months immediately preceding the event giving rise to the
          claim.
        </p>
        <p>
          These limitations do not apply to: a party&apos;s indemnification obligations under Section 14; the
          Client&apos;s obligation to pay fees; a party&apos;s breach of its confidentiality obligations; or liability
          for fraud, fraudulent misrepresentation, gross negligence, wilful misconduct, or death or personal injury
          caused by negligence, to the extent such liability cannot be limited under applicable law.
        </p>
        <Callout>
          The parties agree that the fee levels reflect this allocation of risk, and that these limitations form an
          essential basis of the bargain between them.
        </Callout>
      </Section>

      <Section n="14" title="Indemnities">
        <SubHeading>By the Client</SubHeading>
        <p>
          The Client shall defend, indemnify, and hold harmless Augova and its officers, directors, employees, and
          agents from and against any third-party claim, and any resulting loss, liability, damage, fine, penalty, or
          reasonable legal expense, arising out of or relating to:
        </p>
        <List
          items={[
            "the Client's Knowledge Base content, or the accuracy of the information it approved for the AI to rely on;",
            "the Client's failure to obtain any Caller consent, or to give any Caller notice, required by law;",
            "the Client's failure to obtain written consent for a cloned voice;",
            "the Client's breach of Section 6 (Acceptable use);",
            "the Client's own professional services, advice, or treatment provided to a Caller; or",
            "the Client's violation of any law applicable to its business.",
          ]}
        />
        <SubHeading>By Augova</SubHeading>
        <p>
          Augova shall defend, indemnify, and hold harmless the Client from and against any third-party claim that the
          Service, as provided by Augova and used in accordance with these Terms, infringes that third party&apos;s
          Canadian intellectual-property rights, and any resulting loss, liability, damage, or reasonable legal expense.
          This indemnity does not apply to claims arising from Client Data, the Knowledge Base, the Client&apos;s
          modifications, or the Client&apos;s combination of the Service with anything not supplied by Augova.
        </p>
        <p>
          The indemnified party shall promptly notify the indemnifying party of the claim, give it sole control of the
          defence and settlement (provided no settlement admits liability or imposes an obligation on the indemnified
          party without consent), and provide reasonable cooperation at the indemnifying party&apos;s expense.
        </p>
      </Section>

      <Section n="15" title="Term, termination, and what happens to your data">
        <p>
          These Terms begin when you first use the website or the Service and continue until terminated. Each Order
          Form runs for the term stated in it and, unless it says otherwise, renews for successive periods of the same
          length unless either party gives written notice of non-renewal at least thirty (30) days before the end of
          the then-current term.
        </p>
        <List
          items={[
            "Either party may terminate for material breach if the breach is not cured within thirty (30) days of written notice describing it.",
            "Either party may terminate immediately if the other becomes insolvent, makes an assignment for the benefit of creditors, or has a receiver or trustee appointed.",
            "Augova may terminate immediately where continued provision of the Service would, in its reasonable judgment, be unlawful.",
          ]}
        />
        <SubHeading>On termination</SubHeading>
        <p>
          The Client&apos;s right to use the Service ends. The Client shall pay all fees accrued to the effective date
          of termination. Augova will, on written request made within thirty (30) days after termination, make Client
          Data available for export in a commonly used format. After that period, Augova will delete or de-identify
          Client Data in accordance with the retention schedule in the{" "}
          <Link href="/policy" className="text-terminal-green hover:text-primary underline transition-colors">
            Privacy Policy
          </Link>
          , except where retention is required by law.
        </p>
        <p>
          Sections concerning fees accrued, intellectual property, confidentiality, disclaimers, limitation of
          liability, indemnities, governing law, and any provision that by its nature should survive, shall survive
          termination.
        </p>
      </Section>

      <Section n="16" title="Third-party services">
        <p>
          The Service interoperates with third-party providers — telephony carriers, calendars, CRMs, speech and
          language model vendors, and payment processors. Augova is not responsible for the acts, omissions,
          availability, or terms of those providers. The Client&apos;s use of a third-party integration may be subject
          to that provider&apos;s own terms, and the Client is responsible for maintaining its own accounts with them.
        </p>
      </Section>

      <Section n="17" title="Force majeure">
        <p>
          Neither party is liable for any failure or delay in performance (other than a payment obligation) caused by
          an event beyond its reasonable control, including acts of God, natural disaster, epidemic, war, terrorism,
          civil unrest, labour disruption, governmental action, carrier or utility failure, widespread internet
          disruption, or the failure of an essential third-party provider, provided the affected party gives prompt
          notice and uses reasonable efforts to resume performance.
        </p>
      </Section>

      <Section n="18" title="Governing law and dispute resolution">
        <p>
          These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable in
          it, without regard to conflict-of-laws rules. The{" "}
          <em>United Nations Convention on Contracts for the International Sale of Goods</em> does not apply.
        </p>
        <p>
          The parties shall first attempt in good faith to resolve any dispute through discussion between senior
          representatives. If unresolved within thirty (30) days, the parties irrevocably attorn to the exclusive
          jurisdiction of the courts of the Province of Ontario, sitting in Toronto, save that either party may seek
          injunctive relief in any court of competent jurisdiction to protect its intellectual property or confidential
          information.
        </p>
        <p>
          Nothing in this section deprives a consumer of the protection of the mandatory provisions of the law of the
          jurisdiction in which they reside.
        </p>
      </Section>

      <Section n="19" title="General">
        <List
          items={[
            <>
              <strong className="text-primary">Entire agreement.</strong> These Terms, the Privacy Policy, and each
              Order Form constitute the entire agreement between the parties and supersede all prior discussions and
              representations. In a conflict, the Order Form prevails over these Terms as to the subject matter it
              addresses.
            </>,
            <>
              <strong className="text-primary">Changes.</strong> Augova may amend these Terms by posting a revised
              version and updating the &quot;last updated&quot; date. For a material change affecting an active Order
              Form, Augova will give the Client at least thirty (30) days&apos; notice, and the change takes
              effect at the start of the next renewal term.
            </>,
            <>
              <strong className="text-primary">Assignment.</strong> Neither party may assign these Terms without the
              other&apos;s prior written consent, except that either party may assign to a successor in a merger,
              acquisition, or sale of substantially all assets, on written notice.
            </>,
            <>
              <strong className="text-primary">Severability.</strong> If any provision is held unenforceable, it shall
              be modified to the minimum extent necessary to make it enforceable, and the remaining provisions remain
              in full force.
            </>,
            <>
              <strong className="text-primary">No waiver.</strong> A failure or delay in exercising a right is not a
              waiver of it.
            </>,
            <>
              <strong className="text-primary">Independent contractors.</strong> The parties are independent
              contractors. Nothing creates a partnership, joint venture, agency, or employment relationship, except
              that Augova may act as the Client&apos;s agent under PHIPA where expressly agreed.
            </>,
            <>
              <strong className="text-primary">Notices.</strong> Notices shall be in writing and sent to the email or
              postal address on the Order Form, and are deemed received on the next business day after sending by
              email, or five business days after mailing.
            </>,
            <>
              <strong className="text-primary">Publicity.</strong> Neither party shall use the other&apos;s name or
              logo publicly without prior written consent.
            </>,
            <>
              <strong className="text-primary">Language.</strong> The parties have requested that these Terms and all
              related documents be drawn up in English. Les parties ont demandé que ces conditions et tous les
              documents connexes soient rédigés en anglais.
            </>,
          ]}
        />
      </Section>

      <Section n="20" title="Contact">
        <p>Questions about these Terms may be sent to [LEGAL@AUGOVA.COM], or to our mailing address.</p>
        <p>
          For how we handle personal information, see our{" "}
          <Link href="/policy" className="text-terminal-green hover:text-primary underline transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
