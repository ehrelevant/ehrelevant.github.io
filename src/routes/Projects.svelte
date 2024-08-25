<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import portfolioThumb from '$lib/images/portfolio/thumb.png';

	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="px-4 sm:px-20 lg:px-32 py-20">
	<div class="flex flex-col justify-center items-center gap-6">
		<h2 class="font-bold text-4xl">My Projects</h2>
		<div class="flex flex-row flex-wrap justify-center items-center gap-6">
			<ProjectCard
				name="Portfolio Website"
				thumbnail={portfolioThumb}
				link="https://ehrelevant.github.io"
				github="https://github.com/ehrelevant/ehrelevant.github.io"
			>
				<svelte:fragment slot="description">
					This portfolio website is one of my most recent projects. It was made using
					<Link href="https://kit.svelte.dev/" toBlank={true}>SvelteKit</Link> and
					<Link href="https://tailwindcss.com/" toBlank={true}>Tailwind CSS</Link>. I made this
					website to provide a quick overview of me, my skills, and my past projects.
				</svelte:fragment></ProjectCard
			>
		</div>
	</div>
</section>
