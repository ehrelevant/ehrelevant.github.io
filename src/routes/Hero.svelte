<script lang="ts">
	import { Github, Linkedin, X } from '@steeze-ui/simple-icons';
	import { getRandomInt } from '$lib/helpers';
	import { onMount } from 'svelte';
	import IconLink from '$lib/components/IconLink.svelte';

	const subContentOptions = [
		'Computer Scientist',
		'Programmer',
		'Web Developer',
		'Innovator',
		'Leader',
		'Syn-tax Evader'
	];

	let subContentInfo = {
		text: '',
		optionIndex: 0,
		isPaused: false,
		isDeleting: false
	};

	onMount(() => {
		setInterval(() => {
			if (!subContentInfo.isDeleting) {
				const randomWritePause = getRandomInt(1, 3);

				if (randomWritePause === 1) {
					subContentInfo.text += subContentOptions[subContentInfo.optionIndex].charAt(
						subContentInfo.text.length
					);
				}
				if (subContentInfo.text.length >= subContentOptions[subContentInfo.optionIndex].length) {
					subContentInfo.isPaused = true;
					subContentInfo.isDeleting = true;
				}
			} else if (subContentInfo.isPaused) {
				const randomTransitionPause = getRandomInt(1, 20);

				if (
					randomTransitionPause > 16 &&
					subContentInfo.text.length < subContentOptions[subContentInfo.optionIndex].length + 3
				) {
					subContentInfo.text += '.';
				}

				if (randomTransitionPause === 1) {
					subContentInfo.isPaused = false;
				}
			} else {
				const randomDeletePause = getRandomInt(1, 3);

				if (randomDeletePause !== 1) {
					subContentInfo.text = subContentInfo.text.slice(0, -1);
				}
				if (subContentInfo.text.length <= 0) {
					subContentInfo.optionIndex = (subContentInfo.optionIndex + 1) % subContentOptions.length;
					subContentInfo.isDeleting = false;
				}
			}
		}, 100);
	});
</script>

<section id="intro" class="h-screen w-full flex flex-col justify-center items-center font-light">
	<div class="flex flex-col gap-4 m-8">
		<h1 class="text-6xl font-semibold">
			Hello, I'm <span class="text-pink-red">Ehren Castillo</span>!
		</h1>
		<div class="w-full flex flex-row gap-4">
			<div class="flex flex-row gap-2">
				<IconLink href="https://github.com/ehrelevant" src={Github} />
				<IconLink href="https://www.linkedin.com/in/ehren-castillo-a8045a269/" src={Linkedin} />
				<IconLink href="https://x.com/ehrelevant" src={X} />
			</div>
			<h2 class="text-2xl pl-4 border-l-4">{subContentInfo.text}|</h2>
		</div>
	</div>
</section>
