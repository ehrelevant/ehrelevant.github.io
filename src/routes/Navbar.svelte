<script lang="ts">
	import { fly } from 'svelte/transition';
	import NavBtn from './NavBtn.svelte';
	import { quadInOut } from 'svelte/easing';
	import { Bars3, XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import MobileNavBtn from './MobileNavBtn.svelte';

	let isMenuOpen = $state(false);

	function openMenu() {
		isMenuOpen = true;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav
	class="hidden sm:block bg-dark-bg2 text-dark-text sticky top-0 z-50 w-full shadow-lg h-16 border-b-4 box-content border-black"
>
	<ul class="h-full flex justify-center items-center gap-3">
		<li>
			<NavBtn href="/">Ehren</NavBtn>
		</li>
		<li>
			<NavBtn href="/about">About</NavBtn>
		</li>
		<li>
			<NavBtn href="/projects">Projects</NavBtn>
		</li>
	</ul>
</nav>

<nav class="block sm:hidden">
	{#if isMenuOpen}
		<div
			class="z-40 fixed w-full h-screen bg-dark-bg2/90 backdrop-blur-md flex justify-center items-start"
			transition:fly={{ duration: 100, x: 500, easing: quadInOut }}
		>
			<button
				class="z-50 fixed bg-black group p-3 top-4 right-4 border-2 border-black hover:scale-105 hover:shadow-solid hover:shadow-primary transition-all"
				onclick={closeMenu}
				><Icon src={XMark} class="size-6 group-hover:text-primary transition-colors" /></button
			>
			<ul class="flex flex-col w-full justify-center gap-3 m-6 mt-20">
				<li transition:fly={{ delay: 25, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="/">Ehren</MobileNavBtn>
				</li>
				<li transition:fly={{ delay: 75, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="/about">About</MobileNavBtn>
				</li>
				<li transition:fly={{ delay: 125, duration: 100, x: 500, easing: quadInOut }}>
					<MobileNavBtn href="/projects">Projects</MobileNavBtn>
				</li>
			</ul>
		</div>
	{:else}
		<button
			class="z-50 fixed bg-dark-bg2 p-3 top-4 right-4 border-2 border-black hover:scale-105 hover:bg-dark-hover hover:shadow-solid hover:shadow-black transition-all"
			transition:fly={{ duration: 100, x: 500, easing: quadInOut }}
			onclick={openMenu}><Icon src={Bars3} class="size-6" /></button
		>
	{/if}
</nav>
