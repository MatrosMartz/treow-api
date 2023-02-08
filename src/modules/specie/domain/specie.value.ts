import { UserKind } from '$user/domain'
import { ConservationStatus, SpecieEntity } from './specie.entity'

interface Props {
	user: UserKind
	cientificName: string
	commonNames?: string[]
	description?: string
	status?: ConservationStatus
}

class SpecieValue implements SpecieEntity {
	id: string
	cientificName: string
	commonNames: string[]
	status: ConservationStatus
	checked: boolean
	description: string

	constructor(props: Props) {
		const {
			user,
			cientificName,
			commonNames = [],
			description = '',
			status = ConservationStatus.DD,
		} = props

		this.id = globalThis.crypto.randomUUID()
		this.cientificName = cientificName
		this.commonNames = commonNames
		this.status = status
		this.description = description
		this.checked = user !== UserKind.USER
	}
}

export { SpecieValue }
