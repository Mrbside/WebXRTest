import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
	}
};
