import { componentDocs } from "$content/index.js";
import { getComponentDoc } from "$lib/utils/docs.js";
import type { EntryGenerator } from "./$types.js";

export const prerender = true;

export const entries: EntryGenerator = async () => {
	console.info("Prerendering /components/[name]");
	return componentDocs.map((doc) => ({
		name: doc.slug,
	}));
};

export async function load(event) {
	const { component, title, metadata, schemas } = await getComponentDoc(event.params.name);
	return {
		component,
		title,
		metadata,
		schemas,
	};
}
