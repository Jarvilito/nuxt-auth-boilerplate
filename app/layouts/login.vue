<template>
	<div class="flex items-center justify-center min-h-screen bg-custom">
		<div
			class="min-w-[550px] flex flex-col shadow-xl px-6 py-8 rounded-lg ring-1 ring-gray-100"
		>
			<div class="flex gap-4 mb-4">
				<base-button
					customClass="w-full"
					title="Login"
					@click="tab = 'login'"
				/>

				<base-button
					customClass="w-full"
					type="button"
					@click="tab = 'register'"
					title="Register"
				/>
			</div>

			<login-form v-if="tab === 'login'" />
			<register-form v-else />

			<base-button
				customClass="bg-blue-700 text-white"
				@click="handleSignIn"
				title="Sign in to Github"
			/>
			<slot />
		</div>
	</div>
</template>

<script setup>
	const { signIn } = useAuth();

	async function handleSignIn() {
		await signIn();
	}
	//for login/register credential
	const tab = ref('login');
</script>

<style lang="scss" scoped></style>
