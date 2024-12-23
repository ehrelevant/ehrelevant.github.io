<script lang="ts">
	interface Props {
		name: string;
		children?: import('svelte').Snippet;
	}

	let { name, children }: Props = $props();
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<h3 class="text-xl font-semibold text-center">{name}</h3>
	<div class="flex flex-row justify-center flex-wrap gap-2">
		{@render children?.()}
	</div>
</div>
