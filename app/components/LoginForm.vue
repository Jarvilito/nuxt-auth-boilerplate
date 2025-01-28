<template>
	<form @submit.prevent="handleSubmit">
		<div class="flex flex-col gap-4">
			<base-input
				id="username"
				placeholder="Username"
				label="Username"
				error="This is an error message."
				type="text"
				v-model="form.username"
			/>
			<base-input
				id="password"
				placeholder="Password"
				label="Password"
				type="password"
				hint="This is a hint text to help user."
				v-model="form.password"
			/>
			<base-button
				customClass="text-lg"
				type="submit"
				:loading="isLoading"
				:disabled="isLoading"
				icon="material-symbols:account-circle-outline"
				variant="outlined"
			>
				Sign In
			</base-button>
		</div>
	</form>
</template>

<script setup>
	const form = ref({
		username: '',
		password: '',
	});

	const isLoading = ref(false);

	// const { signIn } = useAuth();

	async function handleSubmit() {
		isLoading.value = true;
		// if (!form.value.username || !form.value.password) {
		// 	alert('Please enter both username and password');
		// 	return;
		// }
		// //extra layer of validation
		// if (isLoading.value) return;

		// isLoading.value = true;
		// try {
		// 	console.log('Attempting to sign in');
		// 	const response = await signIn('credentials', {
		// 		username: form.value.username,
		// 		password: form.value.password,
		// 	});
		// 	console.log('Sign in response:', response);
		// } catch (e) {
		// 	console.error('Failed to sign in:', e.message);
		// 	alert('Failed to sign in: ' + e.message);
		// } finally {
		// 	isLoading.value = false;
		// }
	}
</script>

<style lang="scss" scoped></style>
