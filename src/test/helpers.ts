import fastify, { FastifyInstance, FastifyPluginAsync } from 'fastify'
import { querystringParser } from '~/utils'

interface Plugins {
	plugin: FastifyPluginAsync
	opts?: Record<string, unknown>
}

async function createApp(...plugins: Plugins[]): Promise<FastifyInstance> {
	const app = fastify({ querystringParser })

	for (const { plugin, opts } of plugins) await app.register(plugin, opts)

	return await app
}

export { createApp }
