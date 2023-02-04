// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/styles/vars.scss";',
				},
			},
		},
	},
	css: ['normalize.css/normalize.css', 'assets/styles/main.scss', 'vue-multiselect/dist/vue-multiselect.css'],
});
