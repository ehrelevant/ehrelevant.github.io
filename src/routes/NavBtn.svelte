<script lang="ts">
	export let href: string;
	export let isCurrent = false;

	$: colors = isCurrent ? 'bg-slate-800 text-white' : 'hover:bg-slate-100';
</script>

<a
	{href}
	class="block px-8 py-2 rounded-xl text-lg font-semibold hover:scale-105 transition-all {colors}"
	><slot /></a
>
