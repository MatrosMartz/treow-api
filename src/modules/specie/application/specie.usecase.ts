import {
	SpecieRepo,
	SpecieEntity,
	ConservationStatus,
	SpecieValue,
	OrderKind,
} from '$specie/domain'
import { UserKind } from '$user/domain'

declare namespace Props {
	interface Create {
		cientificName: string
		commonNames?: string[]
		status?: ConservationStatus
		user: UserKind
	}
	interface List {
		page: { offset: number; limit: number }
		filter: {
			status?: keyof typeof ConservationStatus
			checked?: boolean
			name?: string
		}
		order: {
			alphabetical?: OrderKind
			danger?: OrderKind
		}
	}
}

class SpecieUseCase {
	readonly #repo: SpecieRepo
	constructor(repo: SpecieRepo) {
		this.#repo = repo
	}

	async create(props: Props.Create): Promise<SpecieEntity> {
		const specie = new SpecieValue(props)
		return await this.#repo.create(specie)
	}

	async list({ filter, order, page }: Props.List): Promise<SpecieEntity[]> {
		const filterParsed = {
			...filter,
			status: ConservationStatus[filter.status!],
		}
		return (await this.#repo.list({ filter: filterParsed, order, page })) ?? []
	}
}

export { SpecieUseCase }
