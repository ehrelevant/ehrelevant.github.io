<script lang="ts">
	export let name: string;
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<h3 class="text-2xl text-center">{name}</h3>
	<div class="flex flex-row justify-center flex-wrap gap-4">
		<slot />
	</div>
</div>
