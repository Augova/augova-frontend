export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="py-section-gap px-margin-desktop">
        <div className="max-w-3xl mb-section-gap">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">About Us</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-8">
            An assistant for your front desk, not a replacement for it.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Augova builds AI receptionists for businesses that cannot afford to miss a call. We designed it to work
            alongside your team during the moments they are already stretched thin — not to take their place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter border-t border-border-subtle pt-12">
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Confirms before it commits</h3>
            <p className="font-body-md text-on-surface-variant">
              Every booking is read back to the caller and confirmed out loud before it&apos;s locked in.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Knows when to hand off</h3>
            <p className="font-body-md text-on-surface-variant">
              Anything outside its knowledge base or judgment is passed to your team with full context, not guessed
              at.
            </p>
          </div>
          <div>
            <h3 className="font-body-lg font-bold text-primary mb-4">Fails safely</h3>
            <p className="font-body-md text-on-surface-variant">
              If something goes wrong, calls fail over to your existing phone lines — you are never worse off than
              before.
            </p>
          </div>
        </div>

        <div className="mt-section-gap max-w-3xl">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-6">
            Speaks your customers&apos; language
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Natural, multilingual conversation means callers are met in the language they&apos;re most comfortable
            in — not routed through a rigid, English-only phone tree.
          </p>
        </div>
      </section>
    </main>
  );
}
