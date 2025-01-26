<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
	}

	let { href, children }: Props = $props();

	let isCurrent = $derived(page.url.pathname === href);
	let colors = $derived(
		isCurrent
			? 'bg-black text-primary hover:shadow-primary'
			: 'bg-dark-bg2 hover:bg-dark-hover hover:shadow-black'
	);
</script>

<a
	{href}
	class="block w-full py-4 text-center hover:shadow-solid border-4 border-black text-2xl font-semibold hover:scale-105 transition-all {colors}"
	>{@render children?.()}</a
>
