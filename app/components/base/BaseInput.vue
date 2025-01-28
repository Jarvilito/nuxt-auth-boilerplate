<template>
	<div class="flex flex-col gap-1">
		<label
			class="text-font-primary text-sm font-[600]"
			v-if="label"
			:for="id"
			>{{ label }}</label
		>
		<div class="relative">
			<Icon
				v-if="icon"
				:name="icon"
				size="1.25rem"
				:class="[
					iconEnd ? 'right-[0.88rem]' : 'left-[0.88rem]',
					'absolute top-[50%] transform -translate-y-1/2 text-font-primary h-5 w-5',
				]"
			/>
			<input
				:class="[
					icon && !iconEnd && 'pl-10',
					'rounded-lg ring-1 ring-stroke py-[0.56rem] px-[0.88rem] focus:outline focus:outline-ocean-medium disabled:bg-grey-light disabled:text-font-tertiary w-full',
				]"
				:id="id"
				:type="type"
				:placeholder="placeholder"
				:aria-label="ariaLabel"
				:disabled="disabled"
				:value="modelValue"
				@input="onInput"
			/>
		</div>

		<div class="flex justify-between">
			<base-input-error :error="error" v-if="error" />
			<p v-else class="'text-font-primary' text-sm flex items-center">
				{{ props.hint }}
			</p>

			<slot name="right-action" />
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		placeholder: { type: String, required: false },
		label: { type: String, required: false },
		id: { type: String, required: true },
		type: { type: String, required: true },
		modelValue: {
			type: [String, Number] as PropType<string | number>,
			required: true,
		},
		icon: { type: String, required: false },
		iconEnd: { type: Boolean, required: false, default: false },
		error: { type: String, required: false },
		hint: { type: String, required: false },
		ariaLabel: { type: String, required: false },
		disabled: { type: Boolean, required: false, default: false },
	});

	const emit = defineEmits<{
		(e: 'update:modelValue', value: string): void;
	}>();

	const onInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit('update:modelValue', target.value);
	};
</script>

<style scoped></style>
