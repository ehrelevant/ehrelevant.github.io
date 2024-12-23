<script lang="ts">
	interface Props {
		href: string;
		toBlank?: boolean;
		children?: import('svelte').Snippet;
	}

	let { href, toBlank = false, children }: Props = $props();

	const target = toBlank ? '_blank' : '_self';
</script>

<a {href} class="text-sky-400 hover:text-sky-500 hover:underline transition-all" {target}
	>{@render children?.()}</a
>
