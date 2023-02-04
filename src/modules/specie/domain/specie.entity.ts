import { Entity } from '~/types'

enum ConservationStatus {
	// Ectinct
	EX = 'Extinct',
	EW = 'Extinct in the Wild',
	// Threatened
	CR = 'Criticaly Endangered',
	EN = 'Endangered',
	VU = 'Vulnerable',
	// Lower Risk
	NT = 'Near Threatened',
	CD = 'Conservation Dependent',
	LC = 'Least Concern',
	// Other categories
	DD = 'Data Deficient',
	NE = 'Not Evaluated',
}

const specieSchema = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		cientificName: { type: 'string' },
		commonNames: {
			type: 'array',
			items: { type: 'string' },
		},
		status: { type: 'string', enum: Object.values(ConservationStatus) },
		checked: { type: 'boolean' },
		description: { type: 'string' },
	},
	required: [
		'id',
		'cientificName',
		'commonNames',
		'status',
		'checked',
		'description',
	],
} as const

type SpecieEntity = Entity<typeof specieSchema>

export { ConservationStatus, SpecieEntity, specieSchema }
