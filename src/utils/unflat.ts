function unflat<
	T extends Record<string, unknown>,
	K extends Record<string, unknown>
>(target: T): K {
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

export { unflat }
