<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Link } from '@steeze-ui/heroicons';
	import { Github } from '@steeze-ui/simple-icons';

	export let name: string;
	export let splashSrc: string;
	export let link = '';
	export let github = '';
</script>

<div class="w-full h-full border shadow-lg rounded-xl overflow-hidden">
	<img
		src={splashSrc}
		loading="lazy"
		alt="sample"
		class="w-full aspect-video shrink-0 object-cover border-b-2"
	/>
	<div class="m-6 h-full flex flex-col gap-2 overflow-hidden">
		<h3 class="text-2xl font-semibold">{name}</h3>
		<p class="text-lg">
			<slot name="description" />
		</p>
		<div class="flex flex-row gap-2">
			{#if link}
				<a href={link}><Icon src={Link} class="size-6" /></a>
			{/if}
			{#if github}
				<a href={github}><Icon src={Github} class="size-6" /></a>
			{/if}
		</div>
	</div>
</div>
