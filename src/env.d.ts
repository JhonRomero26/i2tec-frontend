/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BACKEND_URL: string;
  readonly BACKEND_IMAGES: string;
  readonly VITE_BACKEND_IMAGES: string;
  readonly VITE_BACKEND_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
