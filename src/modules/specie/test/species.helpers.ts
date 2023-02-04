import { SpecieEntity } from '$specie/domain'
import { mockSpecies } from './species.mock.js'

class SpecieUseCaseHelper {
	#length: number
	#species: SpecieEntity[]
	constructor(length = 40) {
		this.#length = length
		this.#species = mockSpecies(this.#length)
	}

	getPage(page: number): SpecieEntity[] {
		return this.#species.slice(page, 10)
	}

	getSpecie(index: number): SpecieEntity {
		return this.#species[index]
	}
}

export { SpecieUseCaseHelper }
