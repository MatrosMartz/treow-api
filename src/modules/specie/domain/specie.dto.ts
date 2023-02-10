import { ConservationStatus, SpecieEntity } from './specie.entity'

enum OrderKind {
	nor = 'normal',
	inv = 'inverse',
}

interface Query {
	commonNames?: string
	status?: ConservationStatus
	cientificName?: string
	checked?: boolean
}

enum IndentifierKind {
	id = 'id',
	cn = 'cientificName',
}

type Indentifier = { id: string } | { cientificName: string }

interface Order {
	alphabetical?: OrderKind
	danger?: OrderKind
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

declare namespace SpecieDTO {
	type Create = SpecieEntity

	type Delete = Indentifier

	type Find = Indentifier

	interface List {
		page: Page
		filter: Query
		order: Order
	}

	type Replace = { content: Omit<SpecieEntity, IndentifierKind> } & Indentifier

	type Update = { updateFields: UpdateFields } & Indentifier
}

export { SpecieDTO, Order, Query, OrderKind, UpdateFields, IndentifierKind }
