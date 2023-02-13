import { Handler, StatusCodes } from '~/types'

import { SpecieUseCase } from '$specie/application'

import { SpecieRoute } from './route-schemas'

class SpecieCtrl {
	#useCase: SpecieUseCase
	constructor(useCase: SpecieUseCase) {
		this.#useCase = useCase
	}

	list: Handler<SpecieRoute.Find> = async (req, rep) => {
		const { filter = {}, order = {} } = req.query

		const page = req.query.page!

		const MIN_OFFSET = 0

		if (page.offset < MIN_OFFSET) {
			rep.statusCode = StatusCodes.NOT_FOUND
			return { hola: 'mundo' }
		}

		const data = await this.#useCase.list({ page, filter, order })

		const PREV_OFFSET = page.offset - page.limit
		const NEXT_OFFSET = page.offset + page.limit

		const species = {
			statusCode: StatusCodes.OK,
			data,
			pagination: {
				prev:
					PREV_OFFSET > MIN_OFFSET
						? req.url.replace(/(?<=offset=)(\d+)/, `${PREV_OFFSET}`)
						: undefined,
				self: req.url,
				next: req.url.replace(/(?<=offset=)(\d+)/, `${NEXT_OFFSET}`),
			},
		}
		return species
	}
}

export { SpecieCtrl }
