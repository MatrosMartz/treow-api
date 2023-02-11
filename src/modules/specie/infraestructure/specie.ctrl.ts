import { Handler, StatusCodes } from '~/types'
import { SpecieRoute } from './route-schemas'
import { SpecieUseCase } from '$specie/application'

class SpecieCtrl {
	#useCase: SpecieUseCase
	constructor(useCase: SpecieUseCase) {
		this.#useCase = useCase
	}

	list: Handler<SpecieRoute.Find> = async (req, rep) => {
		const { filter = {}, order = {} } = req.query

		const MIN_OFFSET = 0
		const DEFAULT_LIMIT = 10
		const page = { offset: MIN_OFFSET, limit: DEFAULT_LIMIT, ...req.query.page }

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
