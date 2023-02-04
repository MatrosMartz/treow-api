import { Handler } from '~/types'
import { SpecieRouteInterfaces } from './species.schema'
import { SpecieUseCase } from '$specie/application'
import { ConservationStatus } from '$specie/domain'

class SpecieCtrl {
	#useCase: SpecieUseCase
	constructor(useCase: SpecieUseCase) {
		this.#useCase = useCase
	}

	list: Handler<SpecieRouteInterfaces.Find> = async (req, rep) => {
		const { filter = {}, order = {} } = req.query

		const page = { ...req.query.page, start: 0, limit: 10 }

		const data = await this.#useCase.list({
			page,
			filter: {
				...filter,
				status:
					ConservationStatus[filter.status as keyof typeof ConservationStatus],
			},
			order,
		})

		const MIN_START = 0
		const PREV_START = page.start - page.limit
		const NEXT_START = (page.start as number) + (page.limit as number)

		const species = {
			data,
			pagination: {
				prev:
					PREV_START > MIN_START
						? req.url.replace(/(?<=start=)(\d+)/, `${PREV_START}`)
						: undefined,
				self: req.url,
				next: req.url.replace(/(?<=start=)(\d+)/, `${NEXT_START}`),
			},
		}
		return species
	}
}

export { SpecieCtrl }
