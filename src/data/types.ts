// Augova — content data types (spec §6). Interfaces for the JSON files in
// src/data/, so M5 components consume the content type-safe. Import a file
// and assert its type at the boundary, e.g.:
//   import statsData from "../data/stats.json";
//   const stats = statsData as Stat[];

/** A sourced proof statistic (stats.json). Real, cited figures — never
 *  fabricated. `source` + `url` must always accompany the value. */
export interface Stat {
  value: string;
  label: string;
  source: string;
  url: string;
}

/** A product feature card (features.json). */
export interface Feature {
  title: string;
  body: string;
}

/** A single "how it works" step (steps.json → steps[]). */
export interface Step {
  /** Zero-padded ordinal, e.g. "01". */
  n: string;
  title: string;
  body: string;
}

/** The steps.json root: ordered steps plus reliability chips. */
export interface StepsData {
  steps: Step[];
  reliability: string[];
}

/** An industry vertical card (industries.json). */
export interface Industry {
  name: string;
  examples: string;
  tags: string[];
}

/** A frequently-asked question (faq.json). Answers are final spec copy;
 *  the pricing question intentionally deflects with no dollar figures. */
export interface Faq {
  q: string;
  a: string;
}

/** An audio demo (demos.json). `audio` + `transcript` stay placeholders
 *  until the real demo recordings land. */
export interface Demo {
  id: string;
  label: string;
  audio: string;
  transcript: string;
}
