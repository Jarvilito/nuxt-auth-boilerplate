import { describe, expect } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils/e2e';
describe('Login Page', async () => {
	await setup({
		setupTimeout: 600000,
		port: 3001,
	});

	it('should render the login form by default', async () => {
		const html = await $fetch('/');
		expect(html).toContain('Login');
		expect(html).toContain('Register');
	});
});
