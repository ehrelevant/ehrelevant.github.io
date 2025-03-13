<script>
	import IconLink from '$lib/components/IconLink.svelte';
	import { getRandomInt } from '$lib/helpers';
	import { Github, Linkedin, X } from '@steeze-ui/simple-icons';
	import { onMount } from 'svelte';

	const subContentOptions = [
		'Computer Scientist',
		'Programmer',
		'Web Developer',
		'Leader',
		'Syn-tax Evader'
	];

	let subContentInfo = $state({
		text: '',
		optionIndex: 0,
		isPaused: false,
		isDeleting: false
	});

	onMount(() => {
		const interval = setInterval(() => {
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

		return () => clearInterval(interval);
	});
</script>

<section
	class="w-full h-full grow bg-home-image flex flex-col bg-cover bg-center backdrop-blur-lg font-light"
>
	<div class="w-full h-full grow flex flex-col justify-center items-center bg-dark-bg/80">
		<div
			class="flex flex-col gap-4 bg-black w-full lg:w-fit lg:hover:shadow-solid-lg lg:hover:scale-105 lg:hover:shadow-primary transition-all p-8"
		>
			<h1 class="text-6xl font-semibold">
				Hello, I'm <span class="text-primary">Ehren Castillo</span>!
			</h1>
			<div class="w-full flex flex-col sm:flex-row gap-4">
				<div class="flex flex-row gap-4">
					<IconLink href="https://github.com/ehrelevant" src={Github} />
					<IconLink href="https://www.linkedin.com/in/ehren-castillo-a8045a269/" src={Linkedin} />
					<IconLink href="https://x.com/ehrelevant" src={X} />
				</div>
				<h2 class="text-2xl pl-4 border-l-4">
					{subContentInfo.text}|
				</h2>
			</div>
		</div>
	</div>
</section>
