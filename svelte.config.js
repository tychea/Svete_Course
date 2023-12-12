// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// export default {
// 	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess({})
// };
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// export default {
// 	preprocess: [vitePreprocess()]
// };
import sveltePreprocess from 'svelte-preprocess'
const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: '@use "style/variable.scss";',
    },
  }),
}
export default config
