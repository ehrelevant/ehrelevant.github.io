<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import portfolioThumb from '$lib/images/portfolio/thumb.png';

	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="px-4 sm:px-20 lg:px-32 flex flex-col gap-6">
	<div class="flex flex-col justify-center items-center">
		<h2
			class="font-bold text-4xl bg-black px-8 py-2 hover:shadow-solid hover:shadow-primary group hover:scale-105 transition-all"
		>
			MY <span class="group-hover:text-primary transition-colors">PROJECTS</span>
		</h2>
	</div>
	<div class="flex flex-wrap justify-center gap-6">
		<ProjectCard
			name="Portfolio Website"
			thumbnail={portfolioThumb}
			link="https://ehrelevant.github.io"
			github="https://github.com/ehrelevant/ehrelevant.github.io"
		>
			{#snippet description()}
				This portfolio website is one of my most recent projects. It was made using
				<Link href="https://kit.svelte.dev/" toBlank={true}>SvelteKit</Link> and
				<Link href="https://tailwindcss.com/" toBlank={true}>Tailwind CSS</Link>. I made this
				website to provide a quick overview of me, my skills, and my past projects.
			{/snippet}
		</ProjectCard>
	</div>
</section>
