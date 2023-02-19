import { getRandom } from "$lib/api";

export async function load() {
	return (await getRandom());
}