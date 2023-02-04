import { FromSchema, JSONSchema } from 'json-schema-to-ts'

type Entity<T extends JSONSchema> = FromSchema<
	T & { additionalProperties: false }
>

export { Entity }
