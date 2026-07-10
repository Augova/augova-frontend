import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="pt-20">
      <section className="pt-10 pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <div className="font-label-mono text-label-mono text-primary uppercase mb-4">Legal</div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">{title}</h1>
          <p className="font-label-mono text-label-mono text-on-surface-variant mb-8">Last updated: {lastUpdated}</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">{intro}</p>

          <div className="legal-body flex flex-col gap-12">{children}</div>
        </div>
      </section>
    </main>
  );
}

export function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-6">
        <span className="font-label-mono text-label-mono text-terminal-green mr-4 align-middle">{n}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="font-body-lg font-bold text-primary mt-4">{children}</h3>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3 pl-6">
      {items.map((item, i) => (
        <li key={i} className="list-disc marker:text-terminal-green">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-terminal-green bg-surface-elevated px-6 py-4 my-2 font-body-md text-on-surface-variant">
      {children}
    </div>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-2 border border-border-subtle">
      <table className="w-full text-left border-collapse min-w-[540px]">
        <thead>
          <tr className="bg-surface-elevated">
            {head.map((h) => (
              <th
                key={h}
                className="font-label-mono text-label-mono text-primary uppercase px-4 py-3 border-b border-border-subtle"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border-subtle last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 font-body-md text-on-surface-variant align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
