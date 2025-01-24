import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LoginForm from '../../app/components/LoginForm.vue';

describe('render login form with username and password fields', () => {
	const signIn = vi.fn().mockImplementation((provider, credentials) => {
		if (
			credentials.username === 'testuser' &&
			credentials.password === 'wrongpassword'
		) {
			return Promise.reject(new Error('Invalid credentials'));
		}
		return Promise.resolve({ ok: true });
	});
	vi.stubGlobal('useAuth', () => ({
		signIn,
	}));

	// Mock the useAuth function
	beforeEach(() => {
		vi.spyOn(window, 'alert').mockImplementation(() => {});
	});

	test('should render login form', () => {
		const wrapper = mount(LoginForm);
		expect(wrapper.find('input[type="text"]').exists()).toBe(true);
		expect(wrapper.find('input[type="password"]').exists()).toBe(true);
		expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
	});

	test('shows alert for empty username or password', async () => {
		const wrapper = mount(LoginForm);
		await wrapper.find('form').trigger('submit.prevent');
		expect(window.alert).toHaveBeenCalledWith(
			'Please enter both username and password'
		);
	});

	test('calls signIn on valid submission', async () => {
		const wrapper = mount(LoginForm);
		await wrapper.find('input[type="text"]').setValue('emilys');
		await wrapper.find('input[type="password"]').setValue('emilyspass');
		await wrapper.find('form').trigger('submit.prevent');

		expect(signIn).toHaveBeenCalledWith('credentials', {
			username: 'emilys',
			password: 'emilyspass',
		});
	});

	test('shows error message on failed sign in', async () => {
		const wrapper = mount(LoginForm);
		await wrapper.find('input[type="text"]').setValue('testuser');
		await wrapper.find('input[type="password"]').setValue('wrongpassword');
		await wrapper.find('form').trigger('submit.prevent');

		expect(window.alert).toHaveBeenCalledWith(
			'Failed to sign in: Invalid credentials'
		);
	});
});
