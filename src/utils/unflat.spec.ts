import { describe, expect, it } from 'vitest'

import { unflat, unflatV2 } from './unflat'

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

describe('unflatV2', () => {
	it('should be flat is a function', () => {
		expect(unflatV2).toBeTypeOf('function')
	})

	it('should be unffaten', () => {
		expect(unflatV2({ target: { 'a.a': 1, 'a.b': 2, 'b.a': 4 } })).toEqual({
			a: { a: 1, b: 2 },
			b: { a: 4 },
		})
	})

	it('should does not overwrite', () => {
		expect(unflatV2({ target: { 'a.a': 1, a: 'hola' } })).toEqual({
			a: { a: 1 },
		})
	})
	it('should does not overwrite 2', () => {
		expect(unflatV2({ target: { a: 1, 'a.a': 'hola' } })).toEqual({
			a: 1,
		})
	})
})
