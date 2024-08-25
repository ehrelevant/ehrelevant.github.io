<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Link } from '@steeze-ui/heroicons';
	import { Github } from '@steeze-ui/simple-icons';

	export let name: string;
	export let splashSrc: string;
	export let link = '';
	export let github = '';
</script>

<div
	class="md:basis-5/12 xl:basis-1/4 md:max-w-[50%] xl:max-w-[33%] grow border shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform"
>
	<img
		src={splashSrc}
		loading="lazy"
		alt="sample"
		class="w-full aspect-video shrink-0 object-cover border-b-2"
	/>
	<div class="m-4 sm:m-6 flex flex-col overflow-hidden gap-4">
		<h3 class="text-2xl font-semibold">{name}</h3>
		{#if $$slots.description}
			<p class="text-base sm:text-lg text-justify">
				<slot name="description" />
			</p>
		{/if}
		{#if link || github}
			<div class="flex flex-row gap-2">
				{#if link}
					<a href={link}><Icon src={Link} class="size-8" /></a>
				{/if}
				{#if github}
					<a href={github}><Icon src={Github} class="size-8" /></a>
				{/if}
			</div>
		{/if}
	</div>
</div>
