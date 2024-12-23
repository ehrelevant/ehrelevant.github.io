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
	class="block w-full py-4 text-center rounded-xl text-2xl font-semibold hover:scale-105 transition-all {colors}"
	>{@render children?.()}</a
>
