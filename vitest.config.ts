import * as path from 'path';
import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
	plugins: [
		Vue(),
		Components({ dirs: ['./components'] }),
		AutoImport({
			/* options */
		}),
	],

	test: {
		globals: true,
		environment: 'jsdom',
	},
	resolve: {
		alias: {
			'#imports': '<rootDir>/.nuxt/imports.d.ts',
		},
	},
});
