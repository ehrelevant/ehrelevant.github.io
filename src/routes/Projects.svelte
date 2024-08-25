<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import sample from '$lib/images/portfolio/sample.jpg';

	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="px-4 sm:px-20 lg:px-32 py-20">
	<div class="flex flex-col justify-center items-center gap-6">
		<h2 class="font-bold text-4xl">My Projects</h2>
		<div class="flex flex-row flex-wrap justify-center items-center gap-6">
			<ProjectCard
				name="Portfolio Website"
				splashSrc={sample}
				link="https://ehrelevant.github.io"
				github="https://github.com/ehrelevant/ehrelevant.github.io"
			>
				<svelte:fragment slot="description">
					This portfolio website is one of my most recent projects. This was made using
					<Link href="https://kit.svelte.dev/" toBlank={true}>SvelteKit</Link> and
					<Link href="https://tailwindcss.com/" toBlank={true}>Tailwind CSS</Link>. This website
					serves as a way for me to give an overview of my skills and descriptions on my past
					projects as a student and developer.
				</svelte:fragment></ProjectCard
			>
		</div>
	</div>
</section>
