<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import portfolioThumb from '$lib/images/portfolio/thumb.png';
	import spamThumb from '$lib/images/simSpamSlam/thumb.png';

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
				This portfolio website was made using
				<Link href="https://kit.svelte.dev/" toBlank>SvelteKit</Link> and
				<Link href="https://tailwindcss.com/" toBlank>Tailwind CSS</Link>. I made this website to
				provide a quick overview of me, my skills, and my past projects.
			{/snippet}
		</ProjectCard>
		<ProjectCard
			name="SIM Spam Slam"
			thumbnail={spamThumb}
			link="https://ktrin-u.github.io/CS132-Arbitrary/"
			github="https://github.com/ktrin-u/CS132-Arbitrary"
		>
			{#snippet description()}
				For our CS 132 project, we explored spam SMS data using NLP and clustering techniques to
				determine the existence of any patterns within them and their contents differed before and
				after the <Link
					href="https://lawphil.net/statutes/repacts/ra2022/ra_11934_2022.html"
					toBlank>SIM Card Registration Act</Link
				> was imposed.
			{/snippet}
		</ProjectCard>
	</div>
</section>
