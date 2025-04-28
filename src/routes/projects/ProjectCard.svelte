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

<div
	class="p-4 gap-4 flex flex-col grow border-4 border-black bg-dark-bg2 group hover:shadow-solid overflow-hidden hover:scale-105 transition-transform"
>
	<h3
		class="text-2xl w-fit font-bold bg-black text-center py-2 px-8 group-hover:text-primary group-hover:shadow-solid group-hover:shadow-primary transition-all"
	>
		{name}
	</h3>
	<div class="flex flex-col lg:flex-row-reverse gap-4">
		<div class="flex flex-col gap-2">
			{#if description}
				<p class="text-base sm:text-lg text-justify">
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
		<img
			src={thumbnail}
			loading="lazy"
			alt="sample"
			class="w-full lg:min-w-96 lg:w-2/5 aspect-video shrink-0 object-cover border-4 border-black"
		/>
	</div>
</div>
