import Link from "next/link";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "AI Voice Receptionist", href: "/#hero" },
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book Demo", href: "/book-demo" },
    ],
  },
];

const TRUST_ITEMS = ["Approved knowledge base", "Human handoff", "Call summaries", "CRM sync"];

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop border-t border-outline-variant bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10">
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <div className="font-label-mono text-label-mono text-primary uppercase mb-4">{column.title}</div>
            <div className="flex flex-col gap-2 font-body-md text-body-md">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Trust</div>
          <div className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
            {TRUST_ITEMS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="font-label-mono text-label-mono text-on-surface-variant">
          © 2026 Augova. AI partner for SMBs. Starting with voice reception.
        </p>
        <div className="flex gap-6 font-label-mono text-label-mono">
          <Link href="/policy" className="text-on-surface-variant hover:text-primary transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-on-surface-variant hover:text-primary transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
