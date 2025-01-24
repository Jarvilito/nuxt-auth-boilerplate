import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import RegisterForm from '../../app/components/RegisterForm.vue';

describe('render register form with fields', () => {
	const $fetch = vi.fn().mockImplementation((url, options) => {
		if (options.body.email === 'test@example.com') {
			return Promise.reject(new Error('Email already exists'));
		}
		return Promise.resolve({ ok: true });
	});
	vi.stubGlobal('$fetch', $fetch);

	// Mock the useAuth function
	beforeEach(() => {
		vi.spyOn(window, 'alert').mockImplementation(() => {});
	});

	test('should render register form', () => {
		const wrapper = mount(RegisterForm);
		expect(wrapper.find('input[aria-label="First Name"]').exists()).toBe(true);
		expect(wrapper.find('input[aria-label="Last Name"]').exists()).toBe(true);
		expect(wrapper.find('input[aria-label="Email"]').exists()).toBe(true);
		expect(wrapper.find('input[aria-label="Password"]').exists()).toBe(true);
		expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
	});

	test('shows alert for empty fields', async () => {
		const wrapper = mount(RegisterForm);
		await wrapper.find('form').trigger('submit.prevent');
		expect(window.alert).toHaveBeenCalledWith('Please fill in all fields');
	});

	test('calls register on valid submission', async () => {
		const wrapper = mount(RegisterForm);
		await wrapper.find('input[aria-label="First Name"]').setValue('Emily');
		await wrapper.find('input[aria-label="Last Name"]').setValue('Johnson');
		await wrapper
			.find('input[aria-label="Email"]')
			.setValue('emily@example.com');
		await wrapper.find('input[aria-label="Password"]').setValue('password123');
		await wrapper.find('form').trigger('submit.prevent');

		expect($fetch).toHaveBeenCalledWith('https://dummyjson.com/users/add', {
			method: 'POST',
			body: {
				firstName: 'Emily',
				lastName: 'Johnson',
				email: 'emily@example.com',
				password: 'password123',
			},
		});
	});

	test('shows error message on failed registration', async () => {
		const wrapper = mount(RegisterForm);
		await wrapper.find('input[aria-label="First Name"]').setValue('Test');
		await wrapper.find('input[aria-label="Last Name"]').setValue('User');
		await wrapper
			.find('input[aria-label="Email"]')
			.setValue('test@example.com');
		await wrapper.find('input[aria-label="Password"]').setValue('password123');
		await wrapper.find('form').trigger('submit.prevent');

		expect(window.alert).toHaveBeenCalledWith(
			'Failed to register: Email already exists'
		);
	});
});
