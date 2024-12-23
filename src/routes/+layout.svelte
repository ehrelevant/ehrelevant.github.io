<script lang="ts">
	import '../app.css';
	import Navbar from './Navbar.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />

{@render children?.()}
