<script lang="ts">
	export let href: string;
	export let toBlank = false;

	const target = toBlank ? '_blank' : '_self';
</script>

<a {href} class="text-sky-400 hover:text-sky-500 hover:underline transition-all" {target}
	><slot /></a
>
