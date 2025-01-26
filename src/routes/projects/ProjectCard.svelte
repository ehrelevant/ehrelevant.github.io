<script lang="ts">
	import { Link } from '@steeze-ui/heroicons';
	import { Github } from '@steeze-ui/simple-icons';
	import IconLink from '$lib/components/IconLink.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		thumbnail: string;
		link?: string;
		github?: string;
		description?: Snippet;
	}

	let { name, thumbnail, link = '', github = '', description }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="md:basis-5/12 xl:basis-1/4 md:max-w-[50%] xl:max-w-[33%] flex flex-col grow border-4 border-black bg-dark-bg2 group hover:shadow-solid overflow-hidden hover:scale-105 transition-transform"
>
	<img
		src={thumbnail}
		loading="lazy"
		alt="sample"
		class="w-full aspect-video shrink-0 object-cover border-b-4 border-black"
	/>
	<div class="m-4 sm:m-6 flex flex-col overflow-hidden gap-4">
		<h3
			class="text-2xl w-fit font-bold bg-black text-center py-2 px-8 group-hover:text-primary group-hover:shadow-solid group-hover:shadow-primary transition-all"
		>
			{name}
		</h3>
		{#if description}
			<p class="text-base sm:text-lg text-justify grow">
				{@render description?.()}
			</p>
		{/if}
		{#if link || github}
			<div class="flex flex-row gap-2">
				{#if link}
					<IconLink href={link} src={Link} />
				{/if}
				{#if github}
					<IconLink href={github} src={Github} />
				{/if}
			</div>
		{/if}
	</div>
</div>
