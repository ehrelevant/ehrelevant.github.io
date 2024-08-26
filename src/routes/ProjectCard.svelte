<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Link, XMark } from '@steeze-ui/heroicons';
	import { Github } from '@steeze-ui/simple-icons';
	import { fade } from 'svelte/transition';
	import IconLink from '$lib/components/IconLink.svelte';

	export let name: string;
	export let thumbnail: string;
	export let link = '';
	export let github = '';

	let isActive = false;

	function handleClick() {
		if ($$slots.default) {
			isActive = true;
			document.documentElement.classList.add('overflow-hidden');
		}
	}

	function handleClose() {
		if ($$slots.default) {
			isActive = false;
			if (document.documentElement.classList.contains('overflow-hidden'))
				document.documentElement.classList.remove('overflow-hidden');
		}
	}
</script>

{#if isActive}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="bg-black/30 z-50 w-full h-full fixed top-0 left-0 flex justify-center items-center"
		transition:fade={{ duration: 100 }}
		on:click={handleClose}
	>
		<div
			class="relative w-full lg:w-11/12 h-full lg:h-5/6 bg-white lg:rounded-xl p-10"
			on:click|stopPropagation
		>
			<button class="absolute top-3 right-3" on:click={handleClose}
				><Icon src={XMark} class="size-6" /></button
			>
			<div class="w-full h-full overflow-hidden"><slot /></div>
		</div>
	</div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="md:basis-5/12 xl:basis-1/4 md:max-w-[50%] xl:max-w-[33%] grow border shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform
	{$$slots.default ? 'cursor-pointer' : ''}"
	on:click={handleClick}
>
	<img
		src={thumbnail}
		loading="lazy"
		alt="sample"
		class="w-full aspect-video shrink-0 object-cover border-b-2 rounded-xl"
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
					<IconLink href={link} src={Link} />
				{/if}
				{#if github}
					<IconLink href={github} src={Github} />
				{/if}
			</div>
		{/if}
	</div>
</div>
