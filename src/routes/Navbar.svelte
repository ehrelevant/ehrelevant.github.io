<script lang="ts">
	import { onMount } from 'svelte';
	import NavBtn from './NavBtn.svelte';

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
</script>

<nav class="fixed top-0 z-50 w-full bg-white shadow-lg shadow-white">
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
