<script lang="ts">
	export let href: string;
	export let isCurrent = false;

	$: colors = isCurrent ? 'bg-dark-gray text-white' : 'hover:bg-slate-100';
</script>

<a
	{href}
	class="block w-full py-4 text-center rounded-xl text-2xl font-semibold hover:scale-105 transition-all {colors}"
	><slot /></a
>
