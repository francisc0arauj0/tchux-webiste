// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    vite: {plugins: [tailwindcss()]},
    integrations: [
        starlight({
            title: "Tchux Docs",
            customCss: ["./src/styles/global.css"],
            social: [
				{
					icon: "github",
					label: "Github",
					href: "https://github.com/francisc0arauj0/tchux",
				},
			],
        })
    ]
});
