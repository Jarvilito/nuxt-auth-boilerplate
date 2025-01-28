<template>
	<div class="flex items-center justify-center min-h-screen bg-custom">
		<div
			class="min-w-[550px] flex flex-col shadow-xl px-6 py-8 rounded-lg ring-1 ring-gray-100"
		>
			<div class="flex gap-4 mb-4">
				<base-button customClass="w-full" @click="tab = 'login'">
					Login
				</base-button>

				<base-button
					customClass="w-full"
					type="button"
					@click="tab = 'register'"
				>
					Register
				</base-button>
			</div>

			<login-form v-if="tab === 'login'" />
			<register-form v-else />

			<base-button customClass="text-lg" @click="handleSignIn" variant="link">
				Sign in to Github
			</base-button>

			<base-button variant="solid" @click="toggleTheme"
				>Toggle Theme</base-button
			>
			<div class="flex py-4">
				<p>Button Sample</p>
				<base-button
					iconOnly
					variant="outlined"
					icon="material-symbols:check-circle-outline"
				/>

				<base-toggle color="brand-medium-blue" v-model="toggle" />
			</div>

			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	const { signIn } = useAuth();
	const colorMode = useColorMode();

	async function handleSignIn() {
		await signIn('github');
	}
	//for login/register credential
	const tab = ref('login');

	const toggle = ref(false);

	const toggleTheme = () => {
		console.log('toggling');
		colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
	};
</script>

<style lang="scss" scoped></style>
