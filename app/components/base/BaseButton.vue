<template>
	<button
		:type="type"
		:disabled="disabled"
		:class="customClass"
		class="text-blue-900 px-4 py-2 mt-4 bg-blue-100 rounded-md"
		@click="$emit('click')"
	>
		{{ title }}
	</button>
</template>

<script setup lang="ts">
	const props = defineProps<{
		title: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		customClass?: string;
	}>();

	const { type = 'button' } = props;
</script>

<style scoped></style>
