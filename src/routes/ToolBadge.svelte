<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<div class="flex flex-col gap-1 justify-center items-center border-2 shadow-md w-24 p-2 rounded-xl">
	<img {src} alt={name} class="w-16 h-16" />
	<p class="text-lg">{name}</p>
</div>
