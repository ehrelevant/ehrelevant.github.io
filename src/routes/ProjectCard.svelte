<script lang="ts">
	import { createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Link, XMark } from '@steeze-ui/heroicons';
	import { Github } from '@steeze-ui/simple-icons';
	import { fade } from 'svelte/transition';
	import IconLink from '$lib/components/IconLink.svelte';

	interface Props {
		name: string;
		thumbnail: string;
		link?: string;
		github?: string;
		children?: import('svelte').Snippet;
		description?: import('svelte').Snippet;
	}

	let {
		name,
		thumbnail,
		link = '',
		github = '',
		children,
		description
	}: Props = $props();

	let isActive = $state(false);

	function handleClick() {
		if (children) {
			isActive = true;
			document.documentElement.classList.add('overflow-hidden');
		}
	}

	function handleClose() {
		if (children) {
			isActive = false;
			if (document.documentElement.classList.contains('overflow-hidden'))
				document.documentElement.classList.remove('overflow-hidden');
		}
	}
</script>

{#if isActive}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="bg-black/30 z-50 w-full h-full fixed top-0 left-0 flex justify-center items-center"
		transition:fade={{ duration: 100 }}
		onclick={handleClose}
	>
		<div
			class="relative w-full lg:w-11/12 h-full lg:h-5/6 bg-white lg:rounded-xl p-10"
			onclick={stopPropagation(bubble('click'))}
		>
			<button class="absolute top-3 right-3" onclick={handleClose}
				><Icon src={XMark} class="size-6" /></button
			>
			<div class="w-full h-full overflow-hidden">{@render children?.()}</div>
		</div>
	</div>
{/if}

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="md:basis-5/12 xl:basis-1/4 md:max-w-[50%] xl:max-w-[33%] grow border shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform
	{children ? 'cursor-pointer' : ''}"
	onclick={handleClick}
>
	<img
		src={thumbnail}
		loading="lazy"
		alt="sample"
		class="w-full aspect-video shrink-0 object-cover border-b-2 rounded-xl"
	/>
	<div class="m-4 sm:m-6 flex flex-col overflow-hidden gap-4">
		<h3 class="text-2xl font-semibold">{name}</h3>
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
</div>
