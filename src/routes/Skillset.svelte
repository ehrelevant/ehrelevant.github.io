<script lang="ts">
	export let name: string;
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<h3 class="text-xl text-center">{name}</h3>
	<div class="flex flex-row justify-center flex-wrap gap-2">
		<slot />
	</div>
</div>
