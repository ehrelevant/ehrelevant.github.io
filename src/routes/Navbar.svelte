<script lang="ts">
	import { onMount } from 'svelte';
	import NavBtn from './NavBtn.svelte';

	let section = 0;

	function changeSection() {
		const aboutSectionTop = document.getElementById('about')?.getBoundingClientRect().top;
		const skillsSectionTop = document.getElementById('skills')?.getBoundingClientRect().top;

		if (skillsSectionTop !== undefined && skillsSectionTop <= 0) section = 2;
		else if (aboutSectionTop !== undefined && aboutSectionTop <= 0) section = 1;
		else section = 0;
	}

	onMount(() => {
		document.addEventListener('scroll', changeSection);
		changeSection();
	});
</script>

<nav class="fixed top-0 w-full bg-white shadow-lg shadow-white">
	<ul class="flex justify-center gap-2 m-2">
		<li>
			<NavBtn href="#hero" isCurrent={section === 0}>Ehren</NavBtn>
		</li>
		<li>
			<NavBtn href="#about" isCurrent={section === 1}>About</NavBtn>
		</li>
		<li>
			<NavBtn href="#skills" isCurrent={section === 2}>Skills</NavBtn>
		</li>
	</ul>
</nav>
