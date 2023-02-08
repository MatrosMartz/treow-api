import { JSONSchema } from 'json-schema-to-ts'
import { Entity } from '~/types'

enum UserKind {
	MOD = 'mod',
	ADMIN = 'admin',
	USER = 'user',
}

const UserSchema = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		name: { type: 'string' },
		email: { type: 'string' },
		kind: { type: 'string', enum: Object.values(UserKind) },
	},
	required: ['id', 'name', 'email', 'kind'] as const,
} satisfies JSONSchema

type UserEntity = Entity<typeof UserSchema>

export { UserEntity, UserKind, UserSchema }
