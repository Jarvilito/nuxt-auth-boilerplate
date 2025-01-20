// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	runtimeConfig: {
		authSecret: process.env.AUTH_SECRET,
	},
	modules: ['@sidebase/nuxt-auth'],
	auth: {
		isEnabled: true,
		provider: {
			type: 'authjs',
		},
	},
});
