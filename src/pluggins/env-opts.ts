import { FastifyEnvOptions } from '@fastify/env'
import { JSONSchema } from 'json-schema-to-ts'
import { Entity } from '~/types'

const schema = {
	type: 'object',
	properties: {
		FASTIFY_PORT: { type: 'number', default: 3000 },
	},
	required: ['FASTIFY_PORT'] as const,
} satisfies JSONSchema

const envOpts: FastifyEnvOptions = { schema, dotenv: true }

declare module 'fastify' {
	interface FastifyInstance {
		config: Entity<typeof schema>
	}
}

export { envOpts }
