<template>
	<div>{{ props.label }}</div>
</template>

<script lang="ts" setup>
	const props = defineProps<{ label: string }>();
</script>
