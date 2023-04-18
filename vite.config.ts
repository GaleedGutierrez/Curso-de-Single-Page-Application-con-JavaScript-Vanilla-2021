import { defineConfig, UserConfigExport } from 'vite';
// import { resolve } from 'path';

const config: UserConfigExport = {
	base: './',
	// server: {
	// 	open: '/public/',
	// },
	build: {
		rollupOptions: {
			// input: './public/index.html',
			input: './borrar.html',
		},
	},
};

export default defineConfig(config);
