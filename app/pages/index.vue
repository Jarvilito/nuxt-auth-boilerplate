<template>
	<div>
		<h2>Welcome to the page {{ data }}</h2>
		<button @click="handleLogout">Logout</button>
	</div>
</template>

<script setup>
	const { data, signOut } = useAuth();

	const handleLogout = async () => {
		await signOut();
	};

	definePageMeta({
		middleware: 'unauthenticated',
	});
</script>

<style lang="scss" scoped></style>
