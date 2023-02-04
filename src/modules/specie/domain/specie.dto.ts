import { ConservationStatus, SpecieEntity } from './specie.entity'

type TypeOrder = 'normal' | 'inverse'

interface Query {
	commonNames?: string
	status?: ConservationStatus
	cientificName?: string
	checked?: boolean
}

interface Order {
	alphabetical?: TypeOrder
	danger?: TypeOrder
}
interface Page {
	start: number
	limit: number
}

interface UpdateFields {
	commonNames?: string[]
	status?: ConservationStatus
	checked?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace SpecieDTO {
	interface Create {
		cientificName: string
		commonNames: string[]
		status: ConservationStatus
		userEmail: string
		id: string
	}

	interface Delete {
		cientificName: string
		userEmail: string
	}

	interface Find {
		cientificName: string
	}

	interface List {
		page: Page
		filter: Query
		order: Order
	}

	interface Replace {
		cientificName: string
		userEmail: string
		content: Omit<SpecieEntity, 'id' | 'cientificName'>
	}

	interface Update {
		cientificName: string
		userEmail: string
		updateFields: UpdateFields
	}
}

export { SpecieDTO, Order, Query, TypeOrder, UpdateFields }
