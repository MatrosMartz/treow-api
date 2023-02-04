import { defineConfig } from 'vitest/config'
import { resolve as r, join } from 'node:path'
import { readdir } from 'node:fs/promises'

async function createAlias(dirPath: string): Promise<Record<string, string>> {
	return Object.fromEntries(
		(await readdir(dirPath)).map(dir => [`$${dir}`, r(join(dirPath, dir))])
	)
}

const alias = {
	'~': r('src'),
	...(await createAlias('src/modules')),
}

export default defineConfig({
	test: {
		alias,
	},
})
