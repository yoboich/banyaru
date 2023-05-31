// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            title: "Баня.ру – портал о банях и саунах России",
            // meta: [
            //     {
            //         name: 'viewport',
            //         content: 'width=device-width, initial-scale=0.8',
            //         media: '(max-width: 375px)'
            //     },
            //     {
            //         name: 'viewport',
            //         content: 'width=device-width, initial-scale=1',
            //         media: '(min-width: 376px)'
            //     }
            // ]
        },
    },
    modules: ["@vite-pwa/nuxt"],
    pwa: {
        registerType: "autoUpdate",
        manifest: {
            name: "Баня.ру",
            short_name: "Баня.ру",
            description: "Баня.ру – портал о банях и саунах России",
            theme_color: "#ffffff",
            icons: [
                {
                    src: "icons/icon-48x48.png",
                    sizes: "48x48",
                    type: "image/png",
                },
                {
                    src: "icons/icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png",
                },
                {
                    src: "icons/icon-96x96.png",
                    sizes: "96x96",
                    type: "image/png",
                },
                {
                    src: "icons/icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png",
                },
                {
                    src: "icons/icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "icons/icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        },
        workbox: {
            navigateFallback: "/",
        },
        client: {
            installPrompt: true,
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_vars.scss" as *;',
                },
            },
        },
        vue: {
            script: {
                defineModel: true,
            },
        },
    },
    css: ["normalize.css/normalize.css", "@/assets/styles/main.scss"],
    ssr: false,
});
