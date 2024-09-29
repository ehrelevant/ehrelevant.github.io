<script lang="ts">
	import Skillset from './Skillset.svelte';
	import ToolBadge from './ToolBadge.svelte';
	import Java from '$lib/icons/tools/Java.svg';
	import JavaScript from '$lib/icons/tools/JavaScript.svg';
	import C from '$lib/icons/tools/C.svg';
	import CPP from '$lib/icons/tools/CPP.svg';
	import HTML from '$lib/icons/tools/HTML.svg';
	import CSS from '$lib/icons/tools/CSS.svg';
	import TypeScript from '$lib/icons/tools/TypeScript.svg';
	import Tailwind from '$lib/icons/tools/Tailwind.svg';
	import Python from '$lib/icons/tools/Python.svg';
	import FastAPI from '$lib/icons/tools/FastAPI.svg';
	import Flask from '$lib/icons/tools/Flask.svg';
	import Git from '$lib/icons/tools/Git.svg';
	import Linux from '$lib/icons/tools/Linux.svg';
	import MongoDB from '$lib/icons/tools/MongoDB.svg';
	import MySQL from '$lib/icons/tools/MySQL.svg';
	import Nodejs from '$lib/icons/tools/Nodejs.svg';
	import PostgreSQL from '$lib/icons/tools/PostgreSQL.svg';
	import React from '$lib/icons/tools/React.svg';
	import Svelte from '$lib/icons/tools/Svelte.svg';
	import Rust from '$lib/icons/tools/Rust.svg';
	import Go from '$lib/icons/tools/Go.svg';
	import Nextjs from '$lib/icons/tools/Nextjs.svg';
</script>

<section id="skills" class="px-4 sm:px-20 lg:px-32 py-20">
	<div class="flex flex-col justify-center items-center gap-6">
		<h2 class="font-bold text-4xl">My Skills</h2>
		<Skillset name="Programming Languages">
			<ToolBadge name="C" src={C} />
			<ToolBadge name="C++" src={CPP} href="https://isocpp.org/" />
			<ToolBadge name="Java" src={Java} href="https://www.oracle.com/java/" />
			<ToolBadge name="Python" src={Python} href="https://www.python.org/" />
			<ToolBadge name="Node.js" src={Nodejs} href="https://nodejs.org/" />
			<ToolBadge name="Go" src={Go} href="https://go.dev/" />
		</Skillset>
		<Skillset name="Frontend Languages & Tools">
			<ToolBadge name="HTML5" src={HTML} href="https://www.w3.org/" />
			<ToolBadge name="CSS3" src={CSS} />
			<ToolBadge name="JavaScript" src={JavaScript} />
			<ToolBadge name="TypeScript" src={TypeScript} href="https://www.typescriptlang.org/" />
			<ToolBadge name="Tailwind" src={Tailwind} href="https://tailwindcss.com/" />
			<ToolBadge name="React" src={React} href="https://react.dev/" />
			<ToolBadge name="Next.js" src={Nextjs} href="https://nextjs.org/" />
			<ToolBadge name="Svelte" src={Svelte} href="https://svelte.dev/" />
		</Skillset>
		<Skillset name="Backend Languages & Tools">
			<ToolBadge name="Flask" src={Flask} href="https://palletsprojects.com/projects/flask/" />
			<ToolBadge name="MySQL" src={MySQL} href="https://www.mysql.com/" />
			<ToolBadge name="PostgreSQL" src={PostgreSQL} href="https://www.postgresql.org/" />
			<ToolBadge name="MongoDB" src={MongoDB} href="https://www.mongodb.com/" />
		</Skillset>
		<Skillset name="Other Languages & Tools">
			<ToolBadge name="Git" src={Git} href="https://git-scm.com/" />
			<ToolBadge name="Linux" src={Linux} href="https://kernel.org/" />
		</Skillset>
	</div>
</section>
