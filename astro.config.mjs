import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	image: {
		service: squooshImageService(),
		domains: ["astro.build"],
		remotePatterns: [{ protocol: "https:" }],
	},
	integrations: [tailwind(), react()],
});
