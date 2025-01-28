<template>
	<div>
		<p class="text-red-main text-sm flex items-center'">
			<Icon name="mdi:info-circle-outline" size="1rem" class="mr-1" />
			{{ error }}
		</p>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		error: {
			type: String,
			required: true,
		},
	});
</script>

<style scoped></style>
