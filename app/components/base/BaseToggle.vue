<template>
	<div>
		{{ props.label }}
		<UToggle
			:class="classVariant"
			:modelValue="modelValue"
			:disabled="disabled"
			@change="onChange"
		/>
	</div>
</template>

<script setup lang="ts">
	//this one dont work
	import { colorConfig } from '~/config/colorConfig';

	console.log(colorConfig);

	const props = defineProps({
		label: {
			type: String,
			required: false,
		},

		modelValue: {
			type: Boolean,
			required: true,
			default: false,
		},

		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},

		color: {
			type: String,
			default: 'brand-blue',
		},

		customClass: {
			type: String,
			required: false,
		},
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: boolean): void;
	}>();

	const onChange = (event: boolean) => {
		emit('update:modelValue', event);
	};

	const classVariant = computed(() => {
		return `aria-checked:dark:bg-${
			(colorConfig as any)[props.color]
		} aria-checked:bg-${(colorConfig as any)[props.color]}`;
	});
</script>

<style scoped></style>
