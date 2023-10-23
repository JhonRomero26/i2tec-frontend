/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TOKEN_BACKEND: string;
  readonly BACKEND_URL: string;
  readonly VITE_BACKEND_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
