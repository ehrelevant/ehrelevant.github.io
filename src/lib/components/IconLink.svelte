<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { IconSource } from '@steeze-ui/svelte-icon';

	interface Props {
		href: string;
		src: IconSource;
	}

	let { href, src }: Props = $props();
</script>

<a {href} target="_blank"><Icon {src} class="size-8 hover:text-pink-red transition-colors" /></a>
