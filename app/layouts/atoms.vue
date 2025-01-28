<template>
	<div class="flex items-center flex-col justify-center min-h-screen bg-custom">
		<h1 class="heading-xl mb-4">ATOMS</h1>
		<div
			class="min-w-[90vw] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 shadow-xl px-6 py-8 rounded-lg ring-1 ring-gray-100 items-center"
		>
			<base-input
				id="error"
				placeholder="Error Input"
				label="Username"
				error="This is an error message."
				type="text"
				v-model="form.error"
			/>
			<base-input
				id="password"
				placeholder="Hint Input"
				label="Hint Input"
				type="text"
				hint="This is a hint text to help user."
				v-model="form.hint"
			/>

			<base-input
				id="disable"
				placeholder="Disable Text"
				label="Disable"
				class="self-start"
				type="text"
				disabled
				v-model="form.hint"
			/>
			<base-input
				id="with-icon"
				placeholder="Text With Icon"
				label="Text With Icon"
				icon="fluent:mail-32-light"
				type="text"
				v-model="form.hint"
			/>

			<base-input
				id="with-icon"
				placeholder="Text With Icon (Right)"
				label="Text With Icon"
				icon="fluent:mail-32-light"
				type="text"
				icon-end
				v-model="form.hint"
			/>

			<base-input
				id="right-action"
				placeholder="With Right Action"
				label="Right Action Text"
				type="text"
				v-model="form.hint"
				error="This is an error message."
			>
				<template #right-action>
					<base-button type="button" custom-space="pr-0" variant="link"
						>Forgot Password</base-button
					>
				</template>
			</base-input>
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
	const colorMode = useColorMode();

	const form = ref({
		error: '',
		hint: '',
		password: '',
	});

	const isLoading = ref(false);

	const toggle = ref(false);

	const toggleTheme = () => {
		console.log('toggling');
		colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
	};
</script>

<style lang="scss" scoped></style>
