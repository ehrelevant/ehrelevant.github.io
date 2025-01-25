<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Navbar from './Navbar.svelte';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="w-full min-h-screen h-full flex flex-col bg-dark-bg text-dark-text">
	<Navbar />

	{@render children?.()}
</div>
