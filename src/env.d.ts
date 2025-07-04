/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	PUBLIC_CMS_URL: string
}

interface ImportMeta {
	env: ImportMetaEnv
}
