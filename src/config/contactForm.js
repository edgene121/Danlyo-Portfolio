// Uses .env.local / Vercel env when set; fallback keeps the form working if env is not loaded at build time.
export const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY ||
  "00f45182-3470-4de2-9945-ba3af3a47427";
