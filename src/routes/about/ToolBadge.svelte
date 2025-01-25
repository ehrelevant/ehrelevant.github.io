<script lang="ts">
	interface Props {
		name: string;
		src: string;
		href?: string;
	}

	let { name, src, href = '' }: Props = $props();
</script>

{#if href}
	<a
		{href}
		target="_blank"
		class="flex flex-col justify-center bg-dark-bg2 items-center border-4 border-black hover:shadow-solid hover:shadow-primary w-28 group aspect-square hover:scale-105 transition-all"
	>
		<img {src} alt={name} class="grow w-12 h-12" />
		<p
			class="text-base font-bold bg-black w-full text-center py-1 group-hover:text-primary transition-all"
		>
			{name}
		</p>
	</a>
{:else}
	<div
		class="flex flex-col justify-center bg-dark-bg2 items-center border-4 border-black hover:shadow-solid hover:shadow-primary w-28 group aspect-square hover:scale-105 transition-all"
	>
		<img {src} alt={name} class="grow w-12 h-12" />
		<p
			class="text-base font-bold bg-black w-full text-center py-1 group-hover:text-primary transition-all"
		>
			{name}
		</p>
	</div>
{/if}
