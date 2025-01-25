<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
	let isCurrent = $derived(page.url.pathname === href);
	let colors = $derived(
		isCurrent
			? 'bg-black text-primary hover:shadow-primary'
			: 'hover:bg-dark-hover hover:shadow-black'
	);
</script>

<a
	{href}
	class="block w-28 hover:border-2 border-black hover:shadow-solid py-2 text-center text-lg font-semibold hover:scale-105 transition-all {colors}"
	>{@render children?.()}</a
>
