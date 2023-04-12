import { UserConfigExport, defineConfig } from 'vite';
// import { resolve } from 'path';

const config: UserConfigExport = {
	root  : './public/',
	build : {
		outDir : '../dist/'
	}
};

export default defineConfig(config);
