<script lang="ts">
	export let href: string;
	export let isCurrent = false;

	$: colors = isCurrent ? 'bg-dark-gray text-white' : 'hover:bg-slate-100';
</script>

<a
	{href}
	class="block w-28 py-2 text-center rounded-xl text-lg font-semibold hover:scale-105 transition-all {colors}"
	><slot /></a
>
