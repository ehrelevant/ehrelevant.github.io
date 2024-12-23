<script lang="ts">
	interface Props {
		href: string;
		isCurrent?: boolean;
		children?: import('svelte').Snippet;
	}

	let { href, isCurrent = false, children }: Props = $props();

	let colors = $derived(isCurrent ? 'bg-dark-gray text-white' : 'hover:bg-slate-100');
</script>

<a
	{href}
	class="block w-28 py-2 text-center rounded-xl text-lg font-semibold hover:scale-105 transition-all {colors}"
	>{@render children?.()}</a
>
