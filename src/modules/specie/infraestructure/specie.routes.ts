import { FastifyInstance } from 'fastify'

import { SpecieUseCase } from '$specie/application'

import { SpecieCtrl } from './specie.ctrl'
import { querystringSchema } from './species.schema.js'
import Repo from './repositorys'

const listSchema: FastifySchema = {
	querystring: querystringSchema.list,
	response: {
		200: {
			type: 'object',
			properties: {
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
		},
	},
} as const

const useCase = new SpecieUseCase(new Repo())

const ctrl = new SpecieCtrl(useCase)

async function speciesRouter(route: FastifyInstance): Promise<void> {
	route.route({
		method: 'GET',
		url: '/',
		schema: listSchema,
		handler: ctrl.list,
	})
}

export default speciesRouter
