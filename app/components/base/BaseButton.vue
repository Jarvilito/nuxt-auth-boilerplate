<template>
	<button
		:disabled="disabled"
		:type="type"
		:class="classVariant"
		:variant="variant"
		class="px-4 py-2 mt-4 rounded-md font-semibold"
		@click="handleClick"
	>
		<div :class="['flex items-center justify-center']">
			<Icon
				v-if="(icon && !iconEnd) || loading"
				:name="loading ? 'svg-spinners:180-ring-with-bg' : icon"
				:size="iconSize"
				class="mr-[0.5rem]"
			/>
			<slot>Base Button</slot>

			<Icon
				v-if="icon && iconEnd"
				:name="icon"
				:size="iconSize"
				class="ml-[0.5rem]"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
	const props = defineProps({
		type: {
			type: String as PropType<'button' | 'submit' | 'reset'>,
			default: 'button',
		},
		variant: { type: String, default: 'solid' },
		icon: { type: String, required: false },
		iconSize: { type: String, default: '1.5rem' },
		loading: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		customClass: { type: String, default: '' },
		customColor: { type: String, default: '' },
		iconEnd: { type: Boolean, default: false },
	});

	const emit = defineEmits(['click']);

	const handleClick = () => {
		emit('click');
	};

	const classVariant = computed(() => {
		if (!props.disabled) {
			const variantTypes = {
				solid: 'bg-brand-blue text-white hover:bg-brand-medium-blue',
				outlined:
					'bg-transparent text-brand-blue ring-1 ring-brand-blue hover:bg-brand-extra-light-blue dark:hover:bg-brand-extra-light-blue',
				link: 'bg-transparent text-brand-blue hover:text-ocean',
				custom: props.customColor,
			};

			return `${variantTypes[props.variant as keyof typeof variantTypes]} ${
				props.customClass || ''
			}`;
		}

		return `${
			props.variant !== 'link'
				? 'bg-grey-medium text-font-tertiary'
				: 'text-grey-medium'
		}`;
	});
</script>

<style scoped></style>
