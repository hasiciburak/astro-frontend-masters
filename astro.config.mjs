import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	integrations: [
		react({
			include: ['**/react/*'],
		}),
		solidJs({
			include: ['**/solid/*', '**/node_modules/@suid/material/**'],
		}),
	],
});
