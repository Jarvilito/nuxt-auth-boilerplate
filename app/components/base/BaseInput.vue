<template>
	<div class="flex flex-col gap-1">
		<label v-if="label" :for="id">{{ label }}</label>
		<input
			class="rounded-lg ring-1 ring-gray-200 p-2 focus:outline focus:outline-sky-500"
			:id="id"
			:type="type"
			:placeholder="placeholder"
			:aria-label="ariaLabel"
			:value="modelValue"
			@input="onInput"
		/>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		placeholder?: string;
		label?: string;
		id: string;
		type: string;
		modelValue: string | number;
		ariaLabel?: string;
	}>();

	const emit = defineEmits<{
		(e: 'update:modelValue', value: string): void;
	}>();

	const onInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit('update:modelValue', target.value);
	};
</script>

<style scoped></style>
