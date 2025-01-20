<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<input type="text" v-model="form.firstName" placeholder="First Name" />
			<input type="text" v-model="form.lastName" placeholder="Last Name" />
			<input type="email" v-model="form.email" placeholder="Email" />
			<input type="password" v-model="form.password" placeholder="Password" />
			<button type="submit">Sign In</button>
		</form>
	</div>
</template>

<script setup>
	const form = ref({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	});

	async function handleSubmit() {
		try {
			const response = await $fetch('https://dummyjson.com/users/add', {
				method: 'POST',
				body: form.value,
			});

			console.log(response);
		} catch (e) {
			console.log(e);
		}
	}
</script>

<style lang="scss" scoped></style>
