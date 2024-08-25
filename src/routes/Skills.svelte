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
</script>

<section id="skills" class="px-4 sm:px-20 lg:px-32 py-20">
	<div class="flex flex-col justify-center items-center gap-6">
		<h2 class="font-bold text-4xl">My Skills</h2>
		<Skillset name="Programming Languages">
			<ToolBadge name="C" src={C} />
			<ToolBadge name="C++" src={CPP} />
			<ToolBadge name="Java" src={Java} />
			<ToolBadge name="Python" src={Python} />
			<ToolBadge name="Rust" src={Rust} />
			<ToolBadge name="Node.js" src={Nodejs} />
		</Skillset>
		<Skillset name="Frontend Languages & Tools">
			<ToolBadge name="HTML5" src={HTML} />
			<ToolBadge name="CSS3" src={CSS} />
			<ToolBadge name="JavaScript" src={JavaScript} />
			<ToolBadge name="TypeScript" src={TypeScript} />
			<ToolBadge name="Tailwind" src={Tailwind} />
			<ToolBadge name="React" src={React} />
			<ToolBadge name="Svelte" src={Svelte} />
		</Skillset>
		<Skillset name="Backend Languages & Tools">
			<ToolBadge name="Flask" src={Flask} />
			<ToolBadge name="FastAPI" src={FastAPI} />
			<ToolBadge name="MySQL" src={MySQL} />
			<ToolBadge name="PostgreSQL" src={PostgreSQL} />
			<ToolBadge name="MongoDB" src={MongoDB} />
		</Skillset>
		<Skillset name="Other Languages & Tools">
			<ToolBadge name="Git" src={Git} />
			<ToolBadge name="Linux" src={Linux} />
		</Skillset>
	</div>
</section>
