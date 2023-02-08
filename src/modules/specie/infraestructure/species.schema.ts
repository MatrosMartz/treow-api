import { Entity } from '~/types'
import { RouteGenericInterface } from 'fastify'
import { ConservationStatus, OrderKind } from '$specie/domain'
import { JSONSchema } from 'json-schema-to-ts'

function enumFromArray<T extends string>(array: T[]): T[] {
	return array.flatMap(v => [v.toUpperCase(), v.toLowerCase()]) as T[]
}

const enumOrder = enumFromArray(Object.values(OrderKind))

const conservationStatusKeys = Object.keys(ConservationStatus) as Array<
	keyof typeof ConservationStatus
>

const querystringSchema = {
	list: {
		type: 'object',
		properties: {
			page: {
				type: 'object',
				properties: { start: { type: 'number' }, limit: { type: 'number' } },
				additionalProperties: false,
			},
			filter: {
				type: 'object',
				properties: {
					status: {
						type: 'string',
						enum: enumFromArray(conservationStatusKeys),
					},
					name: { type: 'string' },
					checked: { type: 'boolean' },
				},
				additionalProperties: false,
			},
			order: {
				type: 'object',
				properties: {
					alphabetical: { type: 'string', enum: enumOrder },
					danger: { type: 'string', enum: enumOrder },
				},
				additionalProperties: false,
			},
		},
	},
} satisfies Record<string, JSONSchema>

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace SpecieRouteInterfaces {
	interface Find extends RouteGenericInterface {
		Querystring: Entity<typeof querystringSchema.list>
	}
}

export { querystringSchema, SpecieRouteInterfaces }
