import {
	RawReplyDefaultExpression,
	RawRequestDefaultExpression,
	RawServerDefault,
	RouteGenericInterface,
	RouteHandlerMethod,
} from 'fastify'

type Handler<T extends RouteGenericInterface = RouteGenericInterface> =
	RouteHandlerMethod<
		RawServerDefault,
		RawRequestDefaultExpression,
		RawReplyDefaultExpression,
		T
	>

export { Handler }
