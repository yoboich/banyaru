// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: { pageTransition: { name: 'page', mode: 'out-in' } },
	modules: ['@nuxt/image-edge'],
	image: {
		provider: 'ipx',
		dir: 'assets/img',
		screens: {
			sm: 320,
			md: 768,
			lg: 1000,
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/styles/vars.scss";',
				},
			},
		},
	},
	css: [
		'normalize.css/normalize.css',
		'assets/styles/main.scss',
		'vue-multiselect/dist/vue-multiselect.css',
	],
	build: {
		transpile: ['@vuepic/vue-datepicker'],
	},
});
