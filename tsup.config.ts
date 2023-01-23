import { defineConfig } from 'tsup'

export default defineConfig({
	minify: true,
	splitting: true,
	entry: ['src/index.ts'],
	bundle: true,
	treeshake: 'recommended',
	outDir: 'dist',
})
