import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';
// import pkg from './package.json';


/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: true
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel(),	
		vite: {
      			define: {
        			'process.env': process.env,
      			},
    		},

		// vite: {
		// 	ssr: {
		// 		noExternal: Object.keys(pkg.dependencies || {})
		// 	}
		// }
	}
};
