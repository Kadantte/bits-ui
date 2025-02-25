import { docs, typeHelperDocs, utilityDocs } from "$content/index.js";
import { getDoc } from "$lib/utils/docs.js";
import type { EntryGenerator } from "./$types.js";

export const prerender = true;

export const entries: EntryGenerator = async () => {
	console.info("Prerendering /docs/[name]");
	console.log("SLUG:", utilityDocs[0].slug);
	console.log("SLUG-FULL:", utilityDocs[0].slugFull);
	return [
		...utilityDocs.map((doc) => ({
			slug: `utilities/${doc.slug}`,
		})),
		...typeHelperDocs.map((doc) => ({
			slug: `type-helpers/${doc.slug}`,
		})),
		...docs.map((doc) => ({
			slug: doc.slug,
		})),
	];
};

export async function load(event) {
	const { component, title, metadata } = await getDoc(event.params.slug);
	return {
		component,
		title,
		metadata,
	};
}
