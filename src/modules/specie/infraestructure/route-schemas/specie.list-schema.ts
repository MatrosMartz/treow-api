import { RouteSchema, StatusCodes } from '~/types'
import { enumFromArray } from '~/utils'

import { ConservationStatus, OrderKind, specieSchema } from '$specie/domain'

const enumOrder = enumFromArray(Object.values(OrderKind))

const conservationStatusKeys = Object.keys(ConservationStatus) as Array<
	keyof typeof ConservationStatus
>

const ListRouteSchema = {
	querystring: {
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
	respose: {
		200: {
			type: 'object',
			properties: {
				status: { type: 'number', enum: [StatusCodes.OK] as const },
				data: {
					type: 'array',
					items: specieSchema,
				},
				pagination: {
					prev: { type: 'string' },
					self: { type: 'string' },
					next: { type: 'string' },
				},
			},
			required: ['status', 'data', 'pagination'] as const,
		},
	},
} satisfies RouteSchema

export { ListRouteSchema }
