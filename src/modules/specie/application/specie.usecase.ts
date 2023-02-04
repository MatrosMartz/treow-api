import {
	SpecieRepo,
	SpecieDTO,
	SpecieEntity,
	ConservationStatus,
} from '$specie/domain'

import { randomUUID } from 'crypto'

class SpecieUseCase {
	readonly #repo: SpecieRepo
	constructor(repo: SpecieRepo) {
		this.#repo = repo
	}

	async create({
		commonNames = [],
		status = ConservationStatus.DD,
		...props
	}: {
		cientificName: string
		commonNames?: string[]
		status?: ConservationStatus
		userEmail: string
	}): Promise<SpecieEntity> {
		return this.#repo.create({
			id: randomUUID(),
			commonNames,
			status,
			...props,
		})
	}

	async delete({
		cientificName: n,
		...props
	}: SpecieDTO.Delete): Promise<void> {
		this.#repo.delete({ cientificName: n.toLowerCase(), ...props })
	}

	async find({
		cientificName,
	}: SpecieDTO.Find): Promise<SpecieEntity | undefined> {
		return this.#repo.find({ cientificName: cientificName.toLowerCase() })
	}

	async list(props: SpecieDTO.List): Promise<SpecieEntity[] | undefined> {
		return this.#repo.list(props)
	}

	async update({
		cientificName: n,
		...props
	}: SpecieDTO.Update): Promise<Partial<SpecieEntity>> {
		return this.#repo.update({ cientificName: n.toLocaleLowerCase(), ...props })
	}

	async replace({
		cientificName: n,
		...props
	}: SpecieDTO.Replace): Promise<SpecieEntity> {
		return this.#repo.replace({
			cientificName: n.toLocaleLowerCase(),
			...props,
		})
	}
}

export { SpecieUseCase }
