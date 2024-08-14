/**
 * @param min
 * @param max
 * @returns random integer within the range between `min` and `max` **(inclusive)**
 */
export function getRandomInt(min: number, max: number): number {
	const ceilMin = Math.ceil(min);
	const floorMax = Math.floor(max);
	return Math.floor(Math.random() * (floorMax - ceilMin + 1) + ceilMin);
}
