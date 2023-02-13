function unflat<T extends Record<string, unknown>, K>(target: T): K {
	const delimiter = '.'
	const response: Record<string, unknown> = {}
	const entries = Object.entries(target)

	for (const [key, value] of entries) {
		const keys = key.split(delimiter)
		addKey({ keys, value, response })
	}

	return response as K
}

interface AProps {
	keys: string[]
	index?: number
	value: unknown
	response: Record<string, unknown>
}

function addKey({ keys, index = 0, value, response }: AProps): void {
	if (!(keys[index] in response)) {
		if (keys.length === index + 1) {
			response[keys[index]] = value
			return
		}
		const newResponse = (response[keys[index]] = {})
		addKey({
			keys,
			index: index + 1,
			value,
			response: newResponse,
		})
		return
	}
	const newResponse = response[keys[index]]
	if (
		typeof newResponse !== 'object' ||
		newResponse == null ||
		keys.length === index + 1
	)
		return

	addKey({
		keys,
		index: index + 1,
		value,
		response: newResponse as Record<string, unknown>,
	})
}

function unflatV2<T extends Record<string, unknown>, K>({
	target,
	delimiter = '.',
}: {
	target: T
	delimiter?: string
}): K {
	const result: Record<string, unknown> = Object.create(null)
	const entries = Object.entries(target)

	for (const [key, value] of entries)
		addKeyV2({ keys: key.split(delimiter), value, obj: result })

	return result as K
}

interface AddKeyProps {
	keys: string[]
	value: unknown
	obj: Record<string, unknown>
}

function addKeyV2({ keys, value, obj }: AddKeyProps): void {
	let next = obj
	const lastKey = keys[keys.length - 1]
	for (const key of keys) {
		if (key !== lastKey && typeof next === 'object') {
			if (!(key in next)) next[key] = Object.create(null)
			next = next[key] as Record<string, unknown>
		}
	}
	if (typeof next === 'object') next[lastKey] ??= value
}

export { unflat, unflatV2 }
