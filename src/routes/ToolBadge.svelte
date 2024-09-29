<script lang="ts">
	export let name: string;
	export let src: string;

	export let href = '';
</script>

{#if href}
	<a
		{href}
		target="_blank"
		class="flex flex-col gap-1 justify-center items-center border-2 shadow-md w-28 p-2 rounded-xl hover:scale-105 transition-transform"
	>
		<img {src} alt={name} class="w-12 h-12" />
		<p>{name}</p>
	</a>
{:else}
	<div
		class="flex flex-col gap-1 justify-center items-center border-2 shadow-md w-28 p-2 rounded-xl hover:scale-105 transition-transform"
	>
		<img {src} alt={name} class="w-12 h-12" />
		<p>{name}</p>
	</div>
{/if}
