<script>
	import Link from '$lib/components/Link.svelte';
</script>

<div
	class="mx-4 sm:mx-12 lg:mx-32 p-4 sm:p-12 border-black group border-4 hover:shadow-solid-lg hover:shadow-black bg-dark-bg2 flex flex-col xl:flex-row justify-center gap-4 xl:gap-8 hover:scale-105 transition-all"
>
	<div class="flex justify-start items-start">
		<h2
			class="w-fit box-content font-bold text-4xl group-hover:shadow-solid group-hover:shadow-primary px-4 py-2 xl:w-32 text-center bg-black xl:text-end transition-all"
		>
			ABOUT <span class="group-hover:text-primary transition-colors">ME</span>
		</h2>
	</div>
	<div class="flex flex-col gap-4">
		<p class="text-lg sm:text-xl text-justify">
			I'm a Junior student currently pursuing a Bachelor's degree in Computer Science at the
			University of the Philippines Diliman. Here, I have been honing my skills in programming,
			problem solving, teamwork, and leadership to expand my capabilities as a web & software
			developer.
		</p>
		<p class="text-lg sm:text-xl text-justify">
			If you are looking to recruit/hire somebody who is hard working, passionate, and willing to
			learn, then feel free to contact me at
			<Link href="mailto:ehrencastillo@gmail.com">ehrencastillo@gmail.com</Link>.
		</p>
	</div>
</div>
