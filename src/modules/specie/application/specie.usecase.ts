import {
	SpecieRepo,
	SpecieEntity,
	ConservationStatus,
	SpecieValue,
} from '$specie/domain'
import { UserUseCase } from '$user/application'

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace UseCase {
	type Create = (props: {
		cientificName: string
		commonNames?: string[]
		status?: ConservationStatus
		userEmail: string
	}) => Promise<SpecieEntity>
}

class SpecieUseCase {
	readonly #repo: SpecieRepo
	readonly #userUC: UserUseCase
	constructor({ repo, userUC }: { repo: SpecieRepo; userUC: UserUseCase }) {
		this.#repo = repo
		this.#userUC = userUC
	}

	create: UseCase.Create = async ({ userEmail, ...specieProps }) => {
		const user = await this.#userUC.getUserKind(userEmail)
		const specie = new SpecieValue({ user, ...specieProps })
		return this.#repo.create(specie)
	}
}

export { SpecieUseCase }
