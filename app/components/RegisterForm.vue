<template>
	<form @submit.prevent="handleSubmit">
		<div class="flex flex-col gap-4">
			<base-input
				id="firstName"
				type="text"
				aria-label="First Name"
				label="First Name"
				v-model="form.firstName"
				placeholder="First Name"
			/>
			<base-input
				id="lastName"
				type="text"
				label="Last Name"
				aria-label="Last Name"
				v-model="form.lastName"
				placeholder="Last Name"
			/>
			<base-input
				id="email"
				type="email"
				aria-label="Email"
				label="Email"
				v-model="form.email"
				required
				placeholder="Email"
			/>
			<base-input
				id="password"
				type="password"
				aria-label="Password"
				label="Password"
				required
				v-model="form.password"
				placeholder="Password"
			/>
			<base-button
				customClass="bg-gray-600 text-white text-lg"
				type="submit"
				:disabled="isLoading"
				title="Sign Up"
			/>
		</div>
	</form>
</template>

<script setup>
	const isLoading = ref(false);
	const form = ref({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	});

	async function handleSubmit() {
		if (isLoading.value) return;
		isLoading.value = true;
		if (
			!form.value.firstName ||
			!form.value.lastName ||
			!form.value.email ||
			!form.value.password
		) {
			alert('Please fill in all fields');
			return;
		}

		try {
			const response = await $fetch('https://dummyjson.com/users/add', {
				method: 'POST',
				body: form.value,
			});

			console.log(response);
			alert('Registration successful!');
		} catch (e) {
			console.log(e);
			alert('Failed to register: ' + e.message);
		} finally {
			isLoading.value = false;
		}
	}
</script>

<style lang="scss" scoped></style>
