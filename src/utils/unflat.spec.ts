import { describe, expect, it } from 'vitest'

import { unflat } from './unflat'

describe('unflat', () => {
	it('should be flat is a function', () => {
		expect(unflat).toBeTypeOf('function')
	})

	it('should be unffaten', () => {
		expect(unflat({ 'a.a': 1, 'a.b': 2, 'b.a': 4 })).toEqual({
			a: { a: 1, b: 2 },
			b: { a: 4 },
		})
	})

	it('should does not overwrite', () => {
		expect(unflat({ 'a.a': 1, a: 'hola' })).toEqual({
			a: { a: 1 },
		})
	})
})
