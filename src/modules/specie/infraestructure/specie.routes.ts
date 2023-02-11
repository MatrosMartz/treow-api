import { FastifyPluginAsync } from 'fastify'

import { SpecieUseCase } from '$specie/application'

import { SpecieCtrl } from './specie.ctrl'
import { schemas } from './route-schemas'
import Repo from './repositorys'

const useCase = new SpecieUseCase(new Repo())

const ctrls = new SpecieCtrl(useCase)

const speciesRouter: FastifyPluginAsync = async route => {
	route.get('/', { schema: schemas.list }, ctrls.list)
}

export default speciesRouter
