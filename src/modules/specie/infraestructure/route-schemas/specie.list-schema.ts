import { RouteSchema, StatusCodes } from '~/types'

import { ConservationStatus, OrderKind, specieSchema } from '$specie/domain'

const enumOrder = Object.values(OrderKind)

const conservationStatusKeys = Object.keys(ConservationStatus) as Array<
	keyof typeof ConservationStatus
>

const ListRouteSchema = {
	querystring: {
		type: 'object',
		properties: {
			page: {
				type: 'object',
				properties: {
					offset: { type: 'number', default: 0 },
					limit: { type: 'number', default: 10 },
				},
				required: ['offset', 'limit'] as const,
				additionalProperties: false,
			},
			filter: {
				type: 'object',
				properties: {
					status: {
						type: 'string',
						enum: conservationStatusKeys,
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
			},
		},
	},
	respose: {
		200: {
			type: 'object',
			properties: {
				statusCode: { type: 'number', enum: [StatusCodes.OK] as const },
				data: {
					type: 'array',
					items: specieSchema,
				},
				pagination: {
					type: 'object',
					properties: {
						prev: { type: 'string' },
						self: { type: 'string' },
						next: { type: 'string' },
					},
					required: ['self'] as const,
				},
			},
			required: ['statusCode', 'data', 'pagination'] as const,
		},
	},
} satisfies RouteSchema

export { ListRouteSchema }
