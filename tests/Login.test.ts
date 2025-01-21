import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import login from '../pages/login.vue';

vi.mock('#imports', () => ({
	definePageMeta: vi.fn(),
}));

describe('is component imported', () => {
	test('normal imports as expected', async () => {
		const wrapper = mount(login);
		expect(wrapper.text()).toContain('Github');
	});
	[];
});
