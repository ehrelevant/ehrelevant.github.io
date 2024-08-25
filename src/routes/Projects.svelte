<script lang="ts">
	import sample from '$lib/images/portfolio/sample.jpg';

	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="px-4 sm:px-20 lg:px-32 py-20">
	<div class="flex flex-col justify-center items-center gap-6">
		<h2 class="font-bold text-4xl">My Projects</h2>
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:grid-cols-3 w-full">
			<ProjectCard
				name="Website 1"
				splashSrc={sample}
				link="https://ehrelevant.github.io"
				github="https://github.com/ehrelevant/ehrelevant.github.io"
			>
				<svelte:fragment slot="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni ex voluptates
					nemo repellat eaque reprehenderit debitis, odio corporis officia sapiente accusantium
					omnis aliquid labore dignissimos corrupti nisi repudiandae hic?
				</svelte:fragment></ProjectCard
			>
			<ProjectCard
				name="Website 2"
				splashSrc={sample}
				link="https://ehrelevant.github.io"
				github="https://github.com/ehrelevant/ehrelevant.github.io"
			/>
			<ProjectCard name="Website 3" splashSrc={sample} />
			<ProjectCard name="Website 4" splashSrc={sample} />
		</div>
	</div>
</section>
