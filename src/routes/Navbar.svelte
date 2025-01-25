<script lang="ts">
	import NavBtn from './NavBtn.svelte';
</script>

<nav
	class="bg-dark-bg2 text-dark-text sticky top-0 z-50 w-full shadow-lg h-16 border-b-4 box-content border-black"
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
