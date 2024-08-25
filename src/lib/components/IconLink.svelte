<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { IconSource } from '@steeze-ui/svelte-icon';

	export let href: string;
	export let src: IconSource;
</script>

<a {href} target="_blank"><Icon {src} class="size-8 hover:text-pink-red transition-colors" /></a>
