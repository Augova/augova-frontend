/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly PUBLIC_CAL_COM_LINK: string;
  readonly PUBLIC_DEMO_NUMBER: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly CF_WEB_ANALYTICS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  turnstile?: {
    reset: (widgetId?: string) => void;
    getResponse: (widgetId?: string) => string | undefined;
  };
}
