// https://nuxt.com/docs/api/configuration/nuxt-config

console.log('Nuxt Config Loaded');
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Stalelake',
		},
	},
	compatibilityDate: '2025-01-27',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	runtimeConfig: {
		authSecret: process.env.AUTH_SECRET,
	},
	modules: ['@nuxtjs/google-fonts', '@sidebase/nuxt-auth', '@nuxt/ui'],

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
				// Personal desktop
				// '@': '/C:/Projects/nuxt-crash/nuxt-recipe',

				// Work laptop
				'@': 'C:/Work/nuxt-auth-boilerplate',
			},
		},
	},

	css: ['@/assets/scss/main.scss'],
});
