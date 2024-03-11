// import adapter from '@sveltejs/adapter-cloudflare';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
			fallback: '404.html',
		}),
	},
	paths: {
		"$lib": ["./src/lib"],
		"$lib/*": ["./src/lib/*"],
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	},
	alias: {
		lib: "src/lib",
	},
};

export default config;
