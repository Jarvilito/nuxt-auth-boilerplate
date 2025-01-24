import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		Vue(),
		Components({ dirs: ['./app/components'] }),
		AutoImport({ imports: ['vue'] }),
	],

	test: {
		globals: true,
		environment: 'jsdom',
		include: ['tests/**/*.test.ts'],
		setupFiles: './tests/setupTests.ts',
	},
	resolve: {
		alias: {
			'#imports': '<rootDir>/.nuxt/imports.d.ts',
		},
	},
});
