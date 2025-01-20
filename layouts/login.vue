<template>
	<div>
		<button v-if="loggedIn" @click="handleSignOut">Sign Out</button>
		<button v-else @click="handleSignIn">Sign In Github</button>

		<button @click="tab = 'login'">Login</button>
		<button @click="tab = 'register'">Register</button>

		<login-form v-if="tab === 'login'" />
		<register-form v-else />
		<slot />
	</div>
</template>

<script setup>
	const { status, signIn, signOut } = useAuth();

	const loggedIn = computed(() => status.value === 'authenticated');

	async function handleSignIn() {
		await signIn();
	}

	async function handleSignOut() {
		await signOut();
	}

	//for login/register credential
	const tab = ref('login');
</script>

<style lang="scss" scoped></style>
