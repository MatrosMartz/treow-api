import { Entity } from '~/types'
import { RouteGenericInterface } from 'fastify'
import { ConservationStatus, TypeOrder } from '$specie/domain'

function enumFromArray(array: string[]): string[] {
	return array.flatMap(v => [v.toUpperCase(), v.toLowerCase()])
}

const enumOrder = enumFromArray(['normal', 'inverse']) as TypeOrder[]

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
						enum: enumFromArray(Object.keys(ConservationStatus)),
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
} as const

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace SpecieRouteInterfaces {
	interface Find extends RouteGenericInterface {
		Querystring: Entity<typeof querystringSchema.list>
	}
}

export { querystringSchema, SpecieRouteInterfaces }
