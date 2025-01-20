<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<input type="text" v-model="form.username" placeholder="Username" />
			<input type="password" v-model="form.password" placeholder="Password" />
			<button type="submit">Log In</button>
		</form>
	</div>
</template>

<script setup>
	const form = ref({
		username: '',
		password: '',
	});

	const { signIn } = useAuth();

	async function handleSubmit(e) {
		console.log('Form submitted with:', form.value);
		try {
			console.log('Attempting to sign in');
			const response = await signIn('credentials', {
				username: form.value.username,
				password: form.value.password,
			});
			console.log('Sign in response:', response);
		} catch (e) {
			console.error('Failed to sign in:', e.message);
			alert('Failed to sign in: ' + e.message);
		}
	}
</script>

<style lang="scss" scoped></style>
