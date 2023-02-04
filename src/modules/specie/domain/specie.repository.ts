import { SpecieEntity } from './specie.entity'
import { SpecieDTO } from './specie.dto'

interface SpecieRepo {
	create: ({ userEmail, ...data }: SpecieDTO.Create) => Promise<SpecieEntity>

	delete: ({ cientificName, userEmail }: SpecieDTO.Delete) => Promise<void>

	find: ({ cientificName }: SpecieDTO.Find) => Promise<SpecieEntity | undefined>

	list: ({
		page,
		filter,
		order,
	}: SpecieDTO.List) => Promise<SpecieEntity[] | undefined>

	update: ({
		cientificName,
		userEmail,
		updateFields,
	}: SpecieDTO.Update) => Promise<Partial<SpecieEntity>>

	replace: ({
		cientificName,
		userEmail,
		content,
	}: SpecieDTO.Replace) => Promise<SpecieEntity>
}

export { SpecieRepo }
