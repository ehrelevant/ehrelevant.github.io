<script lang="ts">
	import { getRandomInt } from '$lib/helpers';
	import { onMount } from 'svelte';

	const subContentOptions = [
		'Computer Science Student',
		'Web Developer',
		'Tech Enthusiast',
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

<section class="h-screen w-full flex flex-col gap-4 justify-center items-center font-light">
	<h1 class="text-7xl">Ehren Castillo</h1>
	<h2 class="text-2xl">{subContentInfo.text}|</h2>
</section>
