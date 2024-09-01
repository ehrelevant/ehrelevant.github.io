<script lang="ts">
	import { onMount } from 'svelte';
	import { Bars3, XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { fly } from 'svelte/transition';
	import NavBtn from './NavBtn.svelte';
	import MobileNavBtn from './MobileNavBtn.svelte';
	import { quadInOut } from 'svelte/easing';

	let section = -1;
	const topOffset = 50;

	function changeSection() {
		const aboutSectionTop = document.getElementById('about')?.getBoundingClientRect().top;
		const skillsSectionTop = document.getElementById('skills')?.getBoundingClientRect().top;
		const projectsSectionTop = document.getElementById('projects')?.getBoundingClientRect().top;

		if (skillsSectionTop !== undefined && skillsSectionTop <= topOffset) section = 3;
		else if (projectsSectionTop !== undefined && projectsSectionTop <= topOffset) section = 2;
		else if (aboutSectionTop !== undefined && aboutSectionTop <= topOffset) section = 1;
		else section = 0;
	}

	onMount(() => {
		document.addEventListener('scroll', changeSection);
		changeSection();
	});

	let isMenuOpen = false;

	function openMenu() {
		isMenuOpen = true;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav class="hidden sm:block fixed top-0 z-50 w-full bg-white shadow-lg shadow-white">
	<ul class="flex justify-center gap-2 m-2">
		<li>
			<NavBtn href="#intro" isCurrent={section === 0}>Intro</NavBtn>
		</li>
		<li>
			<NavBtn href="#about" isCurrent={section === 1}>About</NavBtn>
		</li>
		<li>
			<NavBtn href="#projects" isCurrent={section === 2}>Projects</NavBtn>
		</li>
		<li>
			<NavBtn href="#skills" isCurrent={section === 3}>Skills</NavBtn>
		</li>
	</ul>
</nav>

<nav class="block sm:hidden fixed w-full h-screen z-50">
	{#if isMenuOpen}
		<div
			class="w-full h-full bg-white flex justify-center items-start"
			transition:fly={{ duration: 100, x: 500, easing: quadInOut }}
		>
			<button class="absolute top-3 right-3" on:click={closeMenu}
				><Icon src={XMark} class="size-8" /></button
			>
			<ul class="flex flex-col w-full justify-center gap-2 m-4 mt-16">
				<li transition:fly={{ delay: 50, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="#intro" isCurrent={section === 0}>Intro</MobileNavBtn>
				</li>
				<li transition:fly={{ delay: 75, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="#about" isCurrent={section === 1}>About</MobileNavBtn>
				</li>
				<li transition:fly={{ delay: 100, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="#projects" isCurrent={section === 2}>Projects</MobileNavBtn>
				</li>
				<li transition:fly={{ delay: 125, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="#skills" isCurrent={section === 3}>Skills</MobileNavBtn>
				</li>
			</ul>
		</div>
	{:else}
		<button
			class="bg-dark-gray rounded-full p-4 absolute top-2 right-2 hover:scale-105 hover:bg-gray-700 transition-all"
			transition:fly={{ duration: 100, x: 500, easing: quadInOut }}
			on:click={openMenu}><Icon src={Bars3} class="size-6 text-white" /></button
		>
	{/if}
</nav>
