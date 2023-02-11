import { Entity } from '~/types'
import { RouteGenericInterface } from 'fastify'
import { ListRouteSchema } from './specie.list-schema'

const schemas = {
	list: ListRouteSchema,
}

declare namespace SpecieRoute {
	interface Find extends RouteGenericInterface {
		Querystring: Entity<typeof ListRouteSchema.querystring>
		Response: Entity<typeof ListRouteSchema.respose>
	}
}

export { schemas, SpecieRoute }
