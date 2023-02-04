import { ConservationStatus, SpecieEntity } from '$specie/domain'
import { faker } from '@faker-js/faker'

faker.seed(42)

function forNumber(n: number, fn: () => void): void {
	for (let i = 0; i < n; i++) fn()
}

function createSpecie(): SpecieEntity {
	const commonNames: string[] = []
	forNumber(faker.datatype.number({ min: 1, max: 6 }), () =>
		commonNames.push(faker.lorem.words(2))
	)
	return {
		checked: faker.datatype.boolean(),
		cientificName: faker.lorem.words(2),
		id: faker.datatype.uuid(),
		description: faker.lorem.paragraph(),
		commonNames,
		status: faker.helpers.objectValue(ConservationStatus),
	}
}

function mockSpecies(n: number): SpecieEntity[] {
	const species: SpecieEntity[] = []

	forNumber(n, () => species.push(createSpecie()))
	return species
}

export { mockSpecies }
