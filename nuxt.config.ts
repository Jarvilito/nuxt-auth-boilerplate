// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2025-01-27',
				devtools: { enabled: true },
				future: {
								compatibilityVersion: 4,
				},
				runtimeConfig: {
								authSecret: process.env.AUTH_SECRET,
				},
				modules: ['@sidebase/nuxt-auth', '@nuxt/ui', '@nuxtjs/google-fonts'],

				googleFonts: {
								families: {
												'Red Hat Text': true,
												'Red Hat Mono': true,
								},
								preload: true, // These should be outside the "families" key
								display: 'swap',
				},

				auth: {
								isEnabled: true,
								// origin: process.env.AUTH_ORIGIN || 'http://localhost:3000', // Ensure origin is set
								provider: {
												type: 'authjs',
								},
				},

				tailwindcss: {
								exposeConfig: true,
								viewer: true,
								// Additional options can be configured here
				},

				vite: {
								assetsInclude: ['**/*.woff2'], // Ensures woff2 files are processed by Vite
								resolve: {
												alias: {
																'@': '/C:/Projects/nuxt-crash/nuxt-recipe',
												},
								},
				},

				css: ['@/assets/scss/main.scss'],
});