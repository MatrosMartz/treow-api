import { Entity } from '~/types'
import { RouteGenericInterface } from 'fastify'
import { ListRouteSchema } from './specie.list-schema'

const routesSchemas = {
	list: ListRouteSchema,
}

declare namespace SpecieRoute {
	interface Find extends RouteGenericInterface {
		Querystring: Entity<typeof ListRouteSchema.querystring>
	}
}

export { routesSchemas, SpecieRoute }
