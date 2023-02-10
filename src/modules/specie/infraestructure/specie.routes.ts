import { FastifyInstance } from 'fastify'

import { SpecieUseCase } from '$specie/application'

import { SpecieCtrl } from './specie.ctrl'
import { routesSchemas } from './route-schemas'
import Repo from './repositorys'

const useCase = new SpecieUseCase(new Repo())

const ctrl = new SpecieCtrl(useCase)

async function speciesRouter(route: FastifyInstance): Promise<void> {
	route.route({
		method: 'GET',
		url: '/',
		schema: routesSchemas.list,
		handler: ctrl.list,
	})
}

export default speciesRouter
