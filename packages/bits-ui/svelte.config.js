// @ts-check
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		prerender: {
			handleMissingId: (details) => {
				if (details.id === "#" || details.path.includes("#")) return;
				console.warn(details.message);
			},
		},
	},
};

export default config;
