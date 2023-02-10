function enumFromArray<T extends string>(array: T[]): T[] {
	return array.flatMap(v => [v.toUpperCase(), v.toLowerCase()]) as T[]
}

export { enumFromArray }
