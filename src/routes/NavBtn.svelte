<script lang="ts">
	export let href: string;
	export let isCurrent = false;

	$: colors = isCurrent ? 'bg-dark-gray text-white' : 'hover:bg-gray-100';
</script>

<a {href} class="block px-8 py-2 rounded-xl text-lg font-semibold transition-colors {colors}"
	><slot /></a
>
