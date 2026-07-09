// Augova — analytics helper (spec §11, M8).
//
// Cloudflare Web Analytics' beacon is page-view/RUM only: it does not accept
// custom events ("custom integrations directly with the endpoint are not
// supported" — Cloudflare docs). The spec's custom-event list (demo_cta_click,
// audio_demo_play, form_submit, ...) needs a real destination the team picks
// later (GA4 per the spec's own fallback, or Zaraz). Until then, `track()`
// is the single call site every component uses — swapping the destination
// means editing the body of this function only, nothing at the call sites.
export type AnalyticsEvent =
  | "demo_cta_click"
  | "audio_demo_play"
  | "audio_demo_complete"
  | "demo_number_click"
  | "form_submit"
  | "cal_booking";

export function track(event: AnalyticsEvent, data: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;

  // Dev/debug visibility only; no destination wired yet.
  if (import.meta.env.DEV) {
    console.debug(`[analytics] ${event}`, data);
  }

  // Broadcast on window so a future GA4/Zaraz snippet (or a debugging tool)
  // can listen without this module knowing about it.
  window.dispatchEvent(new CustomEvent(`augova:${event}`, { detail: data }));
}
