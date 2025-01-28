<template>
	<div class="flex flex-col gap-1">
		<label v-if="label" :for="id">{{ label }}</label>
		<input
			class="rounded-lg ring-1 ring-stroke py-[0.56rem] px-[0.88rem] focus:outline focus:outline-ocean-medium"
			:id="id"
			:type="type"
			:placeholder="placeholder"
			:aria-label="ariaLabel"
			:value="modelValue"
			@input="onInput"
		/>
		<slot name="helper">
			<p
				:class="[
					props.error ? 'text-red-main' : 'text-font-primary',
					'text-sm flex items-center',
				]"
			>
				<Icon
					v-if="error"
					name="mdi:info-circle-outline"
					size="1rem"
					class="mr-1"
				/>
				{{ props.error || props.hint }}
			</p>
		</slot>
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
		error: { type: String, required: false },
		hint: { type: String, required: false },
		ariaLabel: { type: String, required: false },
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
